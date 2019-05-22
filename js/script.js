$(document).ready( function() {
    $('.image').hover(
        function() {
            $(this).animate({ 'zoom': 2 }, 1000);
        },
        function(){
            $(this).animate({'zoom' : 1}, 1000);
        })
});

var dark = false;

$('.btn').click(function()
{
    if (dark === false)
    {
        $('.orange').css("background-color", "#00007f");
        $('.orange2').css("background-color", "#000066");
        $('.orange3').css("background-color", "#00004c");
        $('.orange4').css("background-color", "#000033");
        $("p").attr("class", "bg-light");
        $("h1").attr("class", "bg-light");
        $("#message").html("Bonne nuit ! ");
        dark = true;
    }
    else
    {
        $('.orange').css("background-color", "#ffa500");
        $('.orange2').css("background-color", "#e59400");
        $('.orange3').css("background-color", "#cc8400");
        $('.orange4').css("background-color", "#b27300");
        $("p").attr("class", "");
        $("h1").attr("class", "");
        $("#message").html("Bonnes vacances ! ");
        dark = false;
    }
});