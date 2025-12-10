import express from 'express'
import router from './routers/studentRoutes.js';
const app = express();
const port = 6000;
app.use(express.json());
app.use('/',router);
app.get('/users',(req,res)=>{
    console.log("hello this is backend");
    res.send("hello this is backend");;
})
app.listen(port,()=>{
    console.log(`server running at the port ${port}`);
})
export default app;