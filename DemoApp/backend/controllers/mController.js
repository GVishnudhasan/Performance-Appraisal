//const mDb = require('../service/database');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Vishnudhasan:abcd1234@cluster0.i6a9cer.mongodb.net/performanceAppraisal";

class mDB {
    constructor() {
        this.database_name = 'performanceAppraisal';
        this.collection_name = null;
    }

    findOne(collection) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).findOne({}, (err, result) => {
                        if (err) {
                            reject(err);
                        };
                        console.log(result.name);
                        db.close();
                        resolve(true);
                    });
                });
            } catch (err) {
                reject(err);
            }
        });
    }
}

exports.login = async(req, res, next) => {
    try {
        var result = {};
        let data = req.body.data.data;
        if (data.email === 'admin' && data.password === 'admin') {
            console.log("data >>", data);
            result = {
                token : "Bearer <token>",
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
        });
    } catch (e) {
        res.status(401).json({
            status: false,
            message: e.message
        });
    }
}

exports.signup = async(req, res, next) => {
    try {
        let data = req.body.data.data;
        console.log(data);
        res.status(200).json({
            status: true,
            message: 'signup success!'
        });
    } catch (e) {
        res.status(401).json({
            status: false,
            message: e.message
        });
    }
}
exports.test = async(req, res, next) => {
    try {
        let data = req.body.data.data;
        console.log(data);
        res.status(200).json({
            status: true,
            message: 'test success!'
        });
    } catch (e) {
        res.status(401).json({
            status: false,
            message: e.message
        });
    }
}

