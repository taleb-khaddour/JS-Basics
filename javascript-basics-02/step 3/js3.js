var yourName = document.querySelector("#name");
var display = document.querySelector("div");

yourName.addEventListener("change", function () {
  display.innerHTML = yourName.value;
});