import express from "express";
const getuser = (req,res)=>{
    console.log("getting user");
    res.send("this is from get users")
}
const adduser = (req,res)=>{
    const data = req.body;
    console.log(data);
    res.status(210).json(data);
    // res.send(data);
}
export {getuser,adduser};
