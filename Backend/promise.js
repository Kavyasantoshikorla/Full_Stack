function getUserDetails(id){
 return new Promise((resolve,reject)=>{
    console.log("fun1 called");
    resolve({userRoll:"531"});
 })
};
function getUserSubjects(UserRoll)
{
    return new Promise((resolve,reject)=>{
        console.log("fun2 called")
        resolve({userSubId:"math-1"});
    })
};
function getUserMarks(userSubId)
{
    return new Promise((resolve,reject)=>{
        console.log("fun3 called")
        resolve("getting user marks",userSubId);
        console.log(userSubId);
        
    })
}
getUserDetails("123").then((result)=>{
  return getUserSubjects(result.UserRoll)
}).then((result)=>
{
    return getUserMarks(result.userSubId)
}).then((result)=>
   console.log((result)))
   .catch((error)=>console.log((error)))
