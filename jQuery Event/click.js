// $("h1").click(function(){
//     alert("H1 was clicked");
// });

$("button").click(function(){
    alert("A button was clciked");
});

$("button").click(function(){
    var buttonText=$(this).text();
    console.log("you clciked " + buttonText);
});

//using keypress() and giving output on each keypress
// $("input[type='text']").keypress(function(){
//     console.log("key was pressed");
// });

//output console log whenever you press enter key
//this can be done for anykey by using 'event.which' and by knowing about charset number in javascript
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        console.log("you pressed an Enter key");
    }
    // console.log(event);

});

//similar method to addEventListener using 'on'
$("h1").on("click",function(){
    $(this).css("color","purple");
});

//'on' using keypress
$("input[type='text']").on("keypress",function(){
    console.log("Keypressed!");
});

//mouseenter || mouseover  & mouseleave || mouseout
$("button").on("mouseover",function(){
    $(this).css("font-weight","bold");
});
$("button").on("mouseout",function(){
    $(this).css("font-weight","normal");
});