//to fade an element out
$("button#out").on("click",function(){
    $("div.hide").fadeOut(3000,function(){
        $(this).remove(); // '.remove' removes the elements from the DOM, omitting it will only set the 'display' to 'none'
    });
});

//to fade an element in
$("button#in").on("click",function(){
    $("div.show").fadeIn(3000);
});

//do both at once 
$("button#both").on("click",function(){
    $("div.hide").fadeOut(3000,function(){
        $("div.show").fadeIn(3000);
    });
});

//fade toggle
$("button#toggle").on("click",function(){
    $("div.fadeToggle").fadeToggle(3000);
});

//slide up
$("#btnslideup").on("click",function(){
    $(".slide").slideUp(3000);
});

//slide down
$("#btnslidedown").on("click",function(){
    $(".slidedwn").slideDown(3000);
});

//toggle slide
$("button#toggleslide").on("click",function(){
    $("div.slidetoggle").slideToggle(3000,function(){
        console.log("slide toggle is done");
    });
});
