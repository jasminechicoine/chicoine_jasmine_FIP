(function(){
	"use strict";	
	console.log("poop");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

let adContainer = document.querySelector('.ad');
let previewBox = adContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    adContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    adContainer.style.display = 'none';
  };
});

const canImage = document.getElementById("can");
const limeButton = document.getElementById("lime-but");
const lemonButton = document.getElementById("lemon-but");
const grapefruitButton = document.getElementById("grapefruit-but");
const blueberryButton = document.getElementById("blue-but");
const peachButton = document.getElementById("peach-but");
const cherryButton = document.getElementById("cherry-but");
const grapeButton = document.getElementById("grape-but");


limeButton.addEventListener("click", () => {
  canImage.src = "images/lime.png";
});

lemonButton.addEventListener("click", () => {
  canImage.src = "images/lemon.png";
});

grapefruitButton.addEventListener("click", () => {
  canImage.src = "images/grapefruit.png";
});

blueberryButton.addEventListener("click", () => {
  canImage.src = "images/blueberry.png";
});

peachButton.addEventListener("click", () => {
  canImage.src = "images/peach.png";
});

cherryButton.addEventListener("click", () => {
  canImage.src = "images/cherry.png";
});

grapeButton.addEventListener("click", () => {
  canImage.src = "images/grape.png";
});