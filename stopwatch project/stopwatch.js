$(document).ready(function(){
    let interval;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let paused = true;
    let laps = 0;
    let result;
    function startLoop(){
        paused = false
        interval = setInterval(function(){
            milliseconds++
            //This determines the math for the stopwatch
            if(milliseconds > 99){
                milliseconds = 0
                seconds++
            }
            if(seconds > 59){
                seconds = 0
                minutes++
            }
            if(minutes > 59){
                minutes = 0
                hours++
            }
            console.log(`${hours}:${minutes}:${seconds}.${milliseconds}`)
            //references function farther down
            test()
        }, 10)  
    }
    //simple stop that pauses the timer.
    function stopLoop(){
        clearInterval(interval)
        paused = true
    }
    function clearLap(){
        if(paused){
            clearInterval(interval)
            $("#timer").text("00:00:00.00")
            hours = 0;
            minutes = 0;
            seconds = 0;
            milliseconds = 0;
        }
    }
    //This function is here for aesthetic purposes to avoid the timer moving as the values change
    function test(){
        let milTest = milliseconds < 10
        let secTest = seconds < 10
        let minTest = minutes < 10
        let hourTest = hours < 10
        if(milTest && secTest && minTest && hourTest){
            $("#timer").text(`0${hours}:0${minutes}:0${seconds}.0${milliseconds}`)

        }else if(!milTest && secTest && minTest && hourTest){
            $("#timer").text(`0${hours}:0${minutes}:0${seconds}.${milliseconds}`)

        }else if(!milTest && !secTest && minTest && hourTest){
            $("#timer").text(`0${hours}:0${minutes}:${seconds}.${milliseconds}`)

        }else if(!milTest && !secTest && !minTest && hourTest){
            $("#timer").text(`0${hours}:${minutes}:${seconds}.${milliseconds}`)

        }else if(milTest && secTest && minTest && !hourTest){
            $("#timer").text(`${hours}:0${minutes}:0${seconds}.0${milliseconds}`)

        }else if(milTest && secTest && !minTest && !hourTest){
            $("#timer").text(`${hours}:${minutes}:0${seconds}.0${milliseconds}`)

        }else if(milTest && !secTest && !minTest && !hourTest){
            $("#timer").text(`${hours}:${minutes}:${seconds}.0${milliseconds}`)

        }else if(!milTest && secTest && minTest && !hourTest){
            $("#timer").text(`${hours}:0${minutes}:0${seconds}.${milliseconds}`)

        }else if(!milTest && secTest && !minTest && hourTest){
            $("#timer").text(`0${hours}:${minutes}:0${seconds}.${milliseconds}`)

        }else if(!milTest && secTest && !minTest && !hourTest){
            $("#timer").text(`${hours}:${minutes}:0${seconds}.${milliseconds}`)

        }else if(!milTest && !secTest && minTest && !hourTest){
            $("#timer").text(`${hours}:0${minutes}:${seconds}.${milliseconds}`)

        }else if(milTest && !secTest && !minTest && hourTest){
            $("#timer").text(`0${hours}:${minutes}:${seconds}.0${milliseconds}`)

        }else if(milTest && secTest && !minTest && hourTest){
            $("#timer").text(`0${hours}:${minutes}:0${seconds}.0${milliseconds}`)

        }else if(milTest && !secTest && minTest && !hourTest){
            $("#timer").text(`${hours}:0${minutes}:${seconds}.0${milliseconds}`)

        }else if(milTest && !secTest && minTest && hourTest){
            $("#timer").text(`0${hours}:0${minutes}:${seconds}.0${milliseconds}`)

        }else if(!milTest && !secTest && !minTest && !hourTest){
            $("#timer").text(`${hours}:${minutes}:${seconds}.${milliseconds}`)

        }

        
    }
 
    //Lap/Clear will only make laps when the timer is running. Even if clear is pressed while it is running, it will make a lap.
    //Once it is paused, lap and clear reset the timer to zero.
    $(".start-stop").on("click",function(){
        if(!paused){
            stopLoop()
            $(this).text("Start")
            $(this).css({"background-color":"green"})
            $(".lap-clear").text("Clear")
            $(".lap-clear").css({"background-color":"red"})
        }else{
            startLoop()
            $(this).text("Stop")
            $(this).css({"background-color":"red"})
            $(".lap-clear").text("Lap")
            $(".lap-clear").css({"background-color":"green"})
        }
    })

    $(".lap-clear").on("click",function(){
        if(paused){
            clearLap()
            //Removes all laps
            $(".lap-container").text("")
            laps = 0;
        }else if(!paused){
            laps++
            //This access the time on the stopwatch
            result = $("#timer").text()
            //This adds an <li> with all the necessary information
            $(".lap-container").append(`<li>Lap ${laps}: ${result}`)
        }
    })
})