$(document).ready(function(){

    let interval;
    function startLoop(){
        interval = setInterval(function(){
            console.log("Kaden")
            // $("button").on("click", function(){
                $("body").css("background-color", getRandomColor);
            // })
        }, 1000)  
    }
    function stopLoop(){
        clearInterval(interval)
    
    }


    $(".start").on("click",startLoop)
    $(".stop").on("click",stopLoop)

    // $("button").click(function(){
    //     if(interval){
    //         stopLoop();
    //         interval = null
    //     }else{
    //         startLoop(); //triggers when interval is null, giving it a value when the startLoop() executes. Since it is no longer null, the if statement will register true when interval is checked. Now stopLoop() happens
    //     }
    // })
    function getRandomColor(){
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
    function getRandomColor2(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`
    }
})