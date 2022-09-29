exports.login = async(req, res, next) => {
    try {
        let data = req.body.data.data;
        if (data.email === 'admin' && data.password === 'admin') {
            console.log("data >>", data);
        } else {
            throw new Error('Auth Error1');
        }
        res.status(200).json({
            status: true,
            message: 'login success!'
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