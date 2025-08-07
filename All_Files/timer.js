var time = 60
 const Interval1 = setInterval(function()
{
    time = time-1;
    console.log(parseInt(time/60) , ":",time%60,":",time);
    document.getElementsByClassName("minute")[0].innerText = parseInt(time/60);
    document.getElementsByClassName("second")[0].innerText = time%60;
    document.getElementsByClassName("milli")[0].innerText = time;
    if(time == 0)
    {
        clearInterval(Interval1);
    }
},1000)