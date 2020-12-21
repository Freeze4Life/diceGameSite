var num1 = Math.floor(Math.random()*6)+1,
    num2 = Math.floor(Math.random()*6)+1;
var dice = document.querySelectorAll(".dice img");
dice[0].setAttribute("src","images/dice"+num1+".png");
dice[1].setAttribute("src","images/dice"+num2+".png");

if(num1>num2){
  document.querySelector("h1").textContent="🚩Player 1 Wins!";
}else if(num2>num1){
  document.querySelector("h1").textContent="Player 2 Wins!🚩";
}else{
  document.querySelector("h1").textContent="Draw!";
}
