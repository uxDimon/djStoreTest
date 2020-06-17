// Подключает scss
import "./styles.scss";

// Подключает слайдер
import "../node_modules/tiny-slider/src/tiny-slider.scss";
import { tns } from "tiny-slider/src/tiny-slider";

// настройки слайдера
var slider1 = tns({
	container: ".back-slider",
	items: 1,
	speed: 600,
	mode: "gallery",
	prevButton: ".b-prev",
	nextButton: ".b-next",
	nav: false,
});
var slider2 = tns({
	container: ".item-slider",
	items: 2,
	gutter: 38,
	speed: 300,
	prevButton: ".b-prev",
	nextButton: ".b-next",
	// fixedWidth: 316,
	nav: false,
});

// скрывает меню при скроле
const header = document.querySelector(".header");
let scroll = 0;

document.addEventListener("scroll", () => {
	if (window.pageYOffset > scroll) {
		header.classList.add("header_hide");
		scroll = window.pageYOffset;
	}
	if (window.pageYOffset < scroll) {
		header.classList.remove("header_hide");
		scroll = window.pageYOffset;
	}
});
