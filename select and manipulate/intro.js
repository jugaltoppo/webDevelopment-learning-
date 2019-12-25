//list all lis
var lis=$("li");

//change h1 with object variable
var style={
    backgroundColor:"red",
    border:"4px solid orange",
}
$("h1").css(style);


//select all lis and change single property
$("li").css("text-decoration","line-through");

//select link under li and change property
$("li a").css("backgroundColor","yellow");

//select by id
$("#imp").css("backgroundColor","lightgreen");