let username = prompt("Whats your name?");
let cars = new Array("BMW","VOLVO","MASERATI")
let a = Math.floor(Math.random()*cars.length);

//alert("Prueba 1")
if(username==="Andres"){
  document.write("<h1>Hello "+username+" YOU WON A "+cars[a]+"</h1>")
  if (cars[a]===cars[0]) {
    document.write("<img src='./bmw.jpg' alt='oprah winfrey' width='300px'>")
  }
}else if (username==="Chris") {
  document.write("<h1>Hello "+username+"YOU WON A "+cars[a]+"</h1>")
}else {
  document.write("<h1>Hello "+username+"!</h1>")
}
