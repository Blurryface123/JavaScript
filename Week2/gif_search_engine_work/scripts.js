

document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keypress',function(e){
    let input = document.querySelector("input").value;
    let key = e.which || e.keyCode;
    if(key == 13){
        pushToDOM(input);
    }
  });

  function pushToDOM(input) {

    var container = document.querySelector(".js-container");
    container.innerHTML = input;
  
  }