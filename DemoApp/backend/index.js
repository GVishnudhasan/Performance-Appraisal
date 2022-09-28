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