//GRAB THE INPUT VALUE

let button = document.querySelector(".js-go")
button.addEventListener("click",function(){
    let input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input)
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;
 
 
   // if the key ENTER is pressed...
   if(e.which === 13) {
     pushToDOM(input);
   }
 
 });

//API

var url = "api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BpKaq8bodOahwIS1A9sTHPlesY4EYCkb";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
  console.log(data);

});
//SHOWS THE GIF
function pushToDOM(input){
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}