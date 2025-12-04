function getUserDetails(id,callback)
{
    console.log("getting userdetails by userid",id);
    callback({userroll:"531"});
}
function getUserSubjects(UserRoll,callback)
{
    console.log("getting usersubjects by userroll",UserRoll);
    callback({subid:'math-1'});
}
function getUserMarks(UserSubId)
{
    console.log("getting usermarks by subid",UserSubId);
}
getUserDetails("123",function(UserRoll)
{
    getUserSubjects(UserRoll,function(UserSubId){
        getUserMarks(UserSubId)
    })
})