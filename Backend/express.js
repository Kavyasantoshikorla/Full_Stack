import express from 'express';
const app = express();
const port = 4000;
app.get('/users',(req,res)=>{
  res.send("This is from backend");
});
app.get('/get-users',(req,res)=>{
    res.send("This is users data");
});
// app.all('*',(req,res)=>{
//     res.status(404).send("404 - Error found");
// });
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
