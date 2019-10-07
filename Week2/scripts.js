var a = document.getElementById('Mr.JavaScript');
a.addEventListener('click',function(){
  var h1 = document.querySelector("h1");
   h1.innerHTML = "im alive!";
  console.log(h1);
})

var reset = document.getElementsByClassName('Reset')
reset[0].addEventListener('click',function(){
  var h1 = document.querySelector("h1");
   h1.innerHTML = "Im Mr JavaScrip";
  console.log(h1);
})
