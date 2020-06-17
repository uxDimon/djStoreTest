// Подключает scss
import "./styles.scss";

// Подключает слайдер
import "../node_modules/tiny-slider/src/tiny-slider.scss";
import { tns } from "tiny-slider/src/tiny-slider";

// настройки слайдера
var slider1 = tns({
	container: ".my-slider",
	items: 1,
	mode: "gallery",
	prevButton: ".b-prev",
	nextButton: ".b-next",
	nav: false,
});
var slider2 = tns({
	container: ".my-slider2",
	items: 2,
	prevButton: ".b-prev",
	nextButton: ".b-next",
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
