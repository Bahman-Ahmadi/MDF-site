import {loadComponent, sleep} from "./utils.js";

loadComponent("loader", "4000");

var slides = ["slider-1.jpg", "slider-2.jpg", "slider-3.jpg", "slider-4.jpg"];
var stopAutoSliding = false;
for (var i = 0; i < slides.length; i++) {
	document.getElementById("circles").innerHTML += `<div class="slider-circle" id="circle${i+1}"></div>`;
}
(async function() {
	while (!stopAutoSliding) {
		await sleep(2500);
		sliding('+', false);
	}
}());

function sliding(symbol, stop = true) {
	var slider = document.getElementById("slider");
	var thisSlide = slider.src.split("-").reverse()[0][0];
	var destination = sliderCalculator(thisSlide,symbol);
	for (var j = 0; j < slides.length; j++) {
		document.getElementById("circle"+(j+1)).style = `background: transparent;`;
	}
	slider.src = "dist/assets/images/slider-"+destination+".jpg";
	document.getElementById("circle"+destination).style = "background: #fff;";
	if (stop) {
		stopAutoSliding = true;
	}
}

function sliderCalculator(slide, operator) {
	if (operator == "+") {
		if (slide == slides.length) {
			return 1;
		} else {
			return slide*1+1;
		}
	} else if (operator == "-") {
		if (slide == 1) {
			return slides.length;
		} else {
			return slide*1-1;
		}
	}
}

$('.slider-button-next').on("click", function () {sliding('+')});
$('.slider-button-previous').on("click", function () {sliding('-')});