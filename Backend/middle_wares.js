import express from 'express'
const app = express();
const port = 6000;
// middleware
// app.use(bodyParser.json);
app.use(express.json())
app.get('/get-user',(req,res)=>{
    res.send("api success");
})
app.post('/add-user',(req,res)=>{
     const data = req.body;
     console.log(data);
     res.send("data added");
});
app.put('/edit-user',(req,res)=>{
    const data = req.body;
    console.log(data);
    res.send("data edited");
})
app.delete('/delete-user',(req,res)=>{
    const data = req.data;
    console.log(data);
    res.send("data deleted");
})
app.listen(port,()=>{
    console.log(`server running at the post ${port}`);
})
