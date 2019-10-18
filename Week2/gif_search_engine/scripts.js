//GRAB THE INPUT VALUE

let button = document.querySelector(".js-go")
button.addEventListener("click", function () {
  let input = document.querySelector("input").value;
  console.log(input);
  pushToDOM(input)
});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {

  var input = document.querySelector("input").value;


  // if the key ENTER is pressed...
  if (e.which === 13) {
    pushToDOM(input);
  }

});

//API

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=BpKaq8bodOahwIS1A9sTHPlesY4EYCkb&limit=5";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function (e) {

  var data = e.target.response;
  pushToDOM(data);
  //console.log(data);

});

//SHOWS THE GIF
function pushToDOM(input) {

  var response = JSON.parse(input)
  var imageURL = response.data;
  console.log(imageURL)

  imageURL.forEach(function (image) {
    var src = image.images.fixed_height.url;
    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\">";

  });
}