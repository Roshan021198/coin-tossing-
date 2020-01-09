var randomValue = Math.floor(Math.random()*2)+1;
var destinationValue = "coin"+randomValue+".png";
var finalDestination1 = "images/" +destinationValue;
document.querySelector("img").setAttribute("src",finalDestination1);

if(randomValue===1)
{
  document.querySelector("p").innerHTML = "💲HEAD💲";
}
else{
  document.querySelector("p").innerHTML = "💲TAIL💲";
}
