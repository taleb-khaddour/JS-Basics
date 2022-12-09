var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
var image3 = document.querySelector("#image3");
var image4 = document.querySelector("#image4");
var image5 = document.querySelector("#image5");

var path1 = "images/image1_2.jpg";
var path2 = "images/image2_2.jpg";
var path3 = "images/image3_2.jpg";
var path4 = "images/image4_2.jpg";
var path5 = "images/image5_2.jpg";

function changeImg(image, path) {
  image.src = path;
}