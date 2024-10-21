$("h1").css("font-size","10rem");

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})

