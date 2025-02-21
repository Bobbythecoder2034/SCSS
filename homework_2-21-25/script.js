$(document).ready(function(){
    let mode = 1;
    var captions = ["Grizzly Bear", "Polar Bear", "Sloth Bear", "Panda Bear", "Sun Bear", "Black Bear"]
    //toggles the dark mode class and changes the text
    $('#dark-mode').on('click', function(){
        $("*").toggleClass("darken")
        if(mode == 1){
            $("#dark-mode").html("Light Mode")
            mode = 0
        }else if(mode == 0){
            $("#dark-mode").html("Dark Mode")
            mode = 1
        }
    })
//This ensures the images are not visible to the user until they are revealed.
$(".analyzed").toggle()

// This function identifies which thumbnail was pushed, then increases the width of the corresponding gallery image
let temp = 0
    $(".thumbnail").on('click', function(){
        $('.number'+temp).toggle()
        let analyzingID = $(this).attr('thumbnailID');
        $('.number'+analyzingID).fadeIn(1000)
        temp = analyzingID
        $('.captions').html(captions[temp-1])
    })

    //keyboard navigation
    $("body").keydown(function(event){
        if(event.key === 'ArrowRight'){
            $('.number'+temp).toggle()
            if(temp == '6'){
                temp = 1
            }else{
                temp++
            }
            $('.number'+temp).fadeIn(1000)
        }else if(event.key === 'ArrowLeft'){
            $('.number'+temp).toggle()
            // The zero is to allow the slides to change without the thumbnail being pressed first
            if(temp == '1' || temp == '0'){
                temp = 6
            }else{
                temp--
            }
            $('.number'+temp).fadeIn(1000)
        }
    })
    $(".thumbnail").on('hover', function(){
        $(this).toggleClass('selected')
    })
    
    //Have it call captions[temp] whenever the image is changed to edit the html of the captions div
});