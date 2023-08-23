var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
var RandomDice = "dice" + RandomNumber1 + ".png";
var RandomImage = "/img/dice/" + RandomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomImage);
var image2 = document.querySelectorAll("img")[1];
var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
var RandomImage1 = "/img/dice/dice" + RandomNumber2 + ".png";
image2.setAttribute("src", RandomImage1);

if (RandomNumber1 > RandomNumber2) {
  document.querySelector("h1").innerHTML = "❤️player1 Wins";
} else if (RandomNumber1 < RandomNumber2) {
  document.querySelector("h1").innerHTML = "PLayer2 Wins❤️";
} else {
  document.querySelector("h1").innerHTML = "❤️DRAW❤️";
}
