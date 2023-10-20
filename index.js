function randomColor() {
  var colors = ["green", "red", "blue"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  var selectedColor = colors[randomIndex];
  document.body.style.backgroundColor = selectedColor;
}

function resetColor() {
  document.body.style.backgroundColor = "white";
}
