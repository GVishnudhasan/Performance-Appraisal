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




// require('dotenv').config()
// const express=require('express')
// const app=express()
// const jwt=require('jsonwebtoken')
// app.use(express.json())
// const posts=[
// {
//     username:"abc",
//     title:'Post 1'
// },
// {
//     username:"efg",
//     title:'Post 2'
// }]
// app.get('/posts',authenticateToken,(req,res)=>
// {
    
//     res.json(posts.filter(post=>post.username===req.user.name))

// })
// function authenticateToken(req,res,next){
//     const authHeader=req.headers['authorization']
//     const token= authHeader && authHeader.split(' ')[1]
//     if(token == null)return res.sendStatus(401)
//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err) return res.sendStatus(403)
//         req.user=user
//         next()
//     })

// }
// app.listen(5000)


const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/mRoutes');

// create express app
const app = express();
const http = require('http').createServer(app);

app.use(morgan("dev"));
app.use(cors({ credentials: false, origin: true }));

// define a simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to DemoAPP."
    });
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use("/v1", mainRoutes);

http.listen(3000, () => {
    console.log('Server is listening :', http.address().port);
});














