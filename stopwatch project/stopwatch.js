let interval;
function startLoop(){
    interval = setInterval(function(){
        console.log("Kaden")
    }, 1000)  
}
function stopLoop(){
    clearInterval(interval)

}


$(".start").on("click",startLoop)
$(".stop").on("click",stopLoop)