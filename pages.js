const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("index");
    
 });
 router.get("/select",(req,res)=>{
     res.render("select");
     
  });
  router.get("/register",(req,res)=>{
     res.render("register");
     
  });
  module.exports=router;
  
 