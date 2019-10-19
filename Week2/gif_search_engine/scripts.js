//GRAB THE INPUT VALUE
document.querySelector(".js-go").addEventListener("click", function () {

  let input = document.querySelector("input").value;
  searchGif(input);

});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {

  var input = document.querySelector("input").value;

  // if the key ENTER is pressed...
  if (e.which === 13) {
    searchGif(input);

  }

});


//Conneting to the API and searching the gif
function searchGif(value) {

  var url = "http://api.giphy.com/v1/gifs/search?q=funny+" + value + "&api_key=BpKaq8bodOahwIS1A9sTHPlesY4EYCkb&limit=5";
  console.log(url)

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', function (e) {
    var data = e.target.response;
    pushToDOM(data);

  });
}


//SHOWS THE GIF
function pushToDOM(input) {

  var response = JSON.parse(input)
  var imageURL = response.data;
  var container = document.querySelector(".js-container");
  console.log(imageURL)
  if (container != null) {
    container.innerHTML = "";
  }

  imageURL.forEach(function (image) {
    var src = image.images.fixed_height.url;

    container.innerHTML += "<img src=\"" + src + "\">";

  });
}