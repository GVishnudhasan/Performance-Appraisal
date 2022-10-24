const mysql=require("mysql");
const bcrypt=require("bcryptjs");
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'usersdb'
});
exports.register=(req,res)=>{
    console.log(req.body);
   /* const facultyid=req.body.facultyid;
    const Name=req.body.Name;
    const department=req.body.department;
    const designation=req.body.designation;
    const totalexperience=req.body.totalexperience;
    const dob=req.body.dob;
    const doj=req.body.doj;
    const mobileno=req.body.mobileno;
    const email=req.body.email;
    const password=req.body.password;
    const cpassword=req.body.cpassword;
    console.log(Name);
    console.log(email);*/
    const{facultyid,Name,department,designation,totalexperience,dob,doj,mobileno,email,password,cpassword}=req.body;
    db.query("select email from users2 where email=?",[email],async(error,result)=>{
        if(error){
            confirm.log(error);
        }
        if(result.length>0){
            return res.render("register",{msg:"Email id already taken",msg_type:"error"});
        }else if(password!==cpassword){
            return res.render("register",{msg:"Password do not match",msg_type:"error"});

        }
        let hashedPassword=await bcrypt.hash(password,8);

        //console.log(hashedPassword);

        db.query("insert into users2 set?",{facultyid:facultyid,Name:Name,department:department,designation:designation,totalexperience:totalexperience,dob:dob,doj:doj,mobileno:mobileno,email:email,password:hashedPassword,cpassword:hashedPassword},(error,result)=>{
            if(error){
                console.log(error);

            }else{
                console.log(result);
                return res.render("register",{msg:"User Registration Success",meg_type:"good"});
            }
        });
    });
    console.log(Name);
    console.log(email);

    //res.send("Form Submitted");
};