
//const mDb = require('../service/database');

const jwt=require('jsonwebtoken')
exports.login = async(req, res, next) => {
    try {
        console.log(req.body);
        var result = {};
        let data = req.body.data.data;
        
        if (data.email === 'admin' && data.password === 'admin') {
            console.log("data >>",process.env.ACCESS_TOKEN_SECRET, data);
            var token="";
            result = {
                
                user_name: "testuser",
                user_type: "string",
                login_id: 1
            }
            token= jwt.sign(result,'dev@123');
            result['token']="Bearer"+ token ;
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

