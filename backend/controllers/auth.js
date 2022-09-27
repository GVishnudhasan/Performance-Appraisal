const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return 

    const name = req.body.name;
    const password = req.body.password;

    try{
        const hashedPassword = await bcrypt.hash(password, 12)

        const userDetails = {
            name: name,
            email: email,
            password: hashedPassword
        }

        const result = await User.save(userDetails)

        res.status(201).json({ messsage: 'User Registered!'})
    } catch (err) {
        //handle
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}