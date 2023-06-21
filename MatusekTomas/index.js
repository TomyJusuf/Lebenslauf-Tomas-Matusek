var element = document.body;
var navbar = document.getElementById("myNav");
var footer = document.getElementById("footer");
var brands = document.getElementById("title_programierung");
var title = document.getElementById("title_info");
var body_dark_mode = document.getElementById("body_text");
// var buttonClick = document.getElementById("buttonClickPart");
var newWindow = document.querySelector(".newWindow");

function myButton() {
  console.log("Hallo");
  newWindow.classList.toggle("toggleNewWindow");
}
function myFunction() {
  title.classList.toggle("color_title");
  brands.classList.toggle("shadowEffect");
  element.classList.toggle("dark-mode");
  navbar.classList.toggle("nav_dark_mode");
  body_dark_mode.classList.toggle("body_text_dark_mode");
  footer.classList.toggle("nav_dark_mode");
}
