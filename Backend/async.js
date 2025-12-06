function getUserDetails(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            resolve({userroll:"678"});
        },2000);
    })
};
const myfunc=async()=>{
   console.log("123");
   const result1 = await getUserDetails("123");
   console.log(result1);
   console.log("456");
   const result2 = await getUserDetails("167");
   console.log(result2);
};
myfunc()
