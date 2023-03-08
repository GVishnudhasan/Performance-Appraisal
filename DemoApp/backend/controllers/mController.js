const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passwordResetToken = require('../model/resetToken');

const User = require("../model/User");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Vishnudhasan:abcd1234@cluster0.i6a9cer.mongodb.net/performanceAppraisal?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
require('dotenv').config();


exports.login = async (req, res, next) => {
    const { facultyid, password } = await req.body;
    // console.log("hello", facultyid, password, req.body);
    try {
        let user = await User.findOne({
            facultyid
        });
        if (!user)
            return res.status(400).json({
                message: "User Not Exist"
            });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({
                message: "Incorrect Password !"
            });

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString",
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );

    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

exports.signup = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        facultyid,
        name,
        branch,
        designation,
        totalexperience,
        dateOfBirth,
        dateOfJoining,
        mobileno,
        email,
        password
    } = req.body;
    try {
        let user = await User.findOne({
            facultyid
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        user = new User({
            facultyid,
            name,
            branch,
            designation,
            totalexperience,
            dateOfBirth,
            dateOfJoining,
            mobileno,
            email,
            password
        });

        const salt = await bcrypt.genSaltSync(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString", {
            expiresIn: 10000
        },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

exports.ResetPassword = async (req, res) => {
    if (!req.body.email) {
        return res.status(500).json({ message: 'Email is required' });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(409).json({ message: 'Email does not exist' });
    }
    const resettoken = new passwordResetToken({ _userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save()
        .then(() => {
            passwordResetToken.deleteMany({ _userId: user._id, resettoken: { $ne: resettoken.resettoken } })
                .then(() => {
                    const transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        port: 465,
                        auth: {
                            user: 'ksrietcse2021@gmail.com',
                            pass: 'eznscahkroajykpn'
                        }
                    });
                    const mailOptions = {
                        to: user.email,
                        from: 'ksrietcse2021@gmail.com',
                        subject: 'Password Reset Request',
                        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                            'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
                            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                    };
                    transporter.sendMail(mailOptions)
                        .then(() => {
                            res.status(200).json({ message: 'Reset Password successfully.' });
                        })
                        .catch((err) => {
                            res.status(500).send({ msg: err.message });
                        });
                })
                .catch((err) => {
                    res.status(500).send({ msg: err.message });
                });
        })
        .catch((err) => {
            res.status(500).send({ msg: err.message });
        });
};

exports.ValidPasswordToken = async (req, res) => {
    if (!req.body.resettoken) {
        return res.status(500).json({ message: 'Token is required' });
    }
    const user = await passwordResetToken.findOne({ resettoken: req.body.resettoken }).exec();
    if (!user) {
        return res.status(409).json({ message: 'Invalid URL' });
    }
    User.findOneAndUpdate({ _id: user._userId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
    }).catch((err) => {
        return res.status(500).send({ msg: err.message });
    });
};

exports.NewPassword = async (req, res) => {
    try {
        const userToken = await passwordResetToken.findOne({ resettoken: req.body.resettoken }).exec();
        if (!userToken) {
            return res.status(409).json({ message: 'Token has expired' });
        }

        const userEmail = await User.findOne({ _id: userToken._userId }).exec();
        if (!userEmail) {
            return res.status(409).json({ message: 'User does not exist' });
        }

        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
        userEmail.password = hashedPassword;
        await userEmail.save();

        await userToken.remove();
        return res.status(201).json({ message: 'Password reset successfully' });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
