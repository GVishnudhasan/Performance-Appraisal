const express =require("express");
const mysql=require("mysql");
const path=require("path");
const hbs=require("hbs");
const app=express();
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'usersdb'
});
db.connect((err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("Mysql connection successfull");
    }
});
app.use(express.urlencoded({extended:false}));
//console.log(__dirname);
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine","hbs");
app.use('/',require("./routes/pages"));
app.use("/auth",require("./routes/auth"));

app.listen(5005,()=>{
    console.log(("server started @ port 5005"));

});
