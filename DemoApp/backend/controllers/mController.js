const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// const passwordResetToken = require('../models/resettoken');

const User = require("../model/User");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Vishnudhasan:abcd1234@cluster0.i6a9cer.mongodb.net/performanceAppraisal";


exports.login = async (req, res, next) => {
    const { facultyid, password } = await req.body;
    // console.log("hello", facultyid, password, req.body);
    try {
<<<<<<< Updated upstream
        let user = await User.findOne({
            facultyid
=======
        var result = {};
        let data = req.body.data.data;
        if (data.email === 'admin' && data.password === 'admin') {
            console.log("data >>", data);
            result = {
                token : "",
                user_name: "testuser",
                user_type: "string",
                login_id: 1
            }
        } else {
            throw new Error('Auth Error1');
        }
        res.status(200).json({
            status: true,
            message: 'login success!',
            data: result
>>>>>>> Stashed changes
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

// exports.ResetPassword = async (req, res) => {
//     if (!req.body.email) {
//         return res
//             .status(500)
//             .json({ message: 'Email is required' });
//     }
//     const user = await User.findOne({
//         email: req.body.email
//     });
//     if (!user) {
//         return res
//             .status(409)
//             .json({ message: 'Email does not exist' });
//     }
//     var resettoken = new passwordResetToken({ _userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });
//     resettoken.save(function (err) {
//         if (err) { return res.status(500).send({ msg: err.message }); }
//         passwordResetToken.find({ _userId: user._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
//         res.status(200).json({ message: 'Reset Password successfully.' });
//         var transporter = nodemailer.createTransport({
//             service: 'Gmail',
//             port: 465,
//             auth: {
//                 user: 'user',
//                 pass: 'password'
//             }
//         });
//         var mailOptions = {
//             to: user.email,
//             from: 'your email',
//             subject: 'Node.js Password Reset',
//             text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
//                 'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
//                 'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
//                 'If you did not request this, please ignore this email and your password will remain unchanged.\n'
//         }
//         transporter.sendMail(mailOptions, (err, info) => {
//         })
//     })
// },

// exports.ValidPasswordToken = async (req, res) => {
//     if (!req.body.resettoken) {
//         return res
//             .status(500)
//             .json({ message: 'Token is required' });
//     }
//     const user = await passwordResetToken.findOne({
//         resettoken: req.body.resettoken
//     });
//     if (!user) {
//         return res
//             .status(409)
//             .json({ message: 'Invalid URL' });
//     }
//     User.findOneAndUpdate({ _id: user._userId }).then(() => {
//         res.status(200).json({ message: 'Token verified successfully.' });
//     }).catch((err) => {
//         return res.status(500).send({ msg: err.message });
//     });
// },

// exports.NewPassword = async (req, res) => {
//     passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
//         if (!userToken) {
//             return res
//                 .status(409)
//                 .json({ message: 'Token has expired' });
//         }

//         User.findOne({
//             _id: userToken._userId
//         }, function (err, userEmail, next) {
//             if (!userEmail) {
//                 return res
//                     .status(409)
//                     .json({ message: 'User does not exist' });
//             }
//             return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
//                 if (err) {
//                     return res
//                         .status(400)
//                         .json({ message: 'Error hashing password' });
//                 }
//                 userEmail.password = hash;
//                 userEmail.save(function (err) {
//                     if (err) {
//                         return res
//                             .status(400)
//                             .json({ message: 'Password can not reset.' });
//                     } else {
//                         userToken.remove();
//                         return res
//                             .status(201)
//                             .json({ message: 'Password reset successfully' });
//                     }

//                 });
//             });
//         });

//     })
// }