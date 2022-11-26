// const express = require('express');
// const connection = require('staffdetails/db');
// const app = express();

// const PORT = process.env.PUBLIC_PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// app.get('/all', (req, res)=> {
//     connection.query('SELECT * FROM sample', (err, results, fields) => {
//         if (err) throw err;
//         res.send(results);
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });




require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())
let refreshTokens = []
app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})
app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})
app.post('/login', (req, res) => {
    //Authentication user
    const username = req.body.username
    const user = { name: username }
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
})
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' })
}
app.listen(7000)