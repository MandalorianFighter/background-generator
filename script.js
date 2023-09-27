var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandom() {
  var randColor1 = getRandomColor();
  var randColor2 = getRandomColor();
  body.style.background = "linear-gradient(to right, " + randColor1 + ", " + randColor2 + ")";
  color1.value = randColor1;
  color2.value = randColor2;
  
  css.textContent = body.style.background;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandom);