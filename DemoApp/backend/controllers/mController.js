const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../model/User");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Vishnudhasan:abcd1234@cluster0.i6a9cer.mongodb.net/performanceAppraisal";


exports.login = async (req, res, next) => {
    const { facultyid, password } = req.body;
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
        totalexperience,
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
            totalexperience,
            mobileno,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
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