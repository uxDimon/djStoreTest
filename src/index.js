// Подключает scss
import "./styles.scss";

// маска для input
import Inputmask from "inputmask";
let selector = document.querySelector(".inputPhone");
let im = new Inputmask("+7 (999) 999-99-99", {
	oncomplete: () => {
		phoneComplete = true;
	},
	onincomplete: () => {
		phoneComplete = false;
	},
});
im.mask(selector);

// Подключает слайдер
// https://github.com/ganlanyuan/tiny-slider
import "../node_modules/tiny-slider/src/tiny-slider.scss";
import { tns } from "tiny-slider/src/tiny-slider";

// настройки слайдера
var slider1 = tns({
	container: ".back-slider",
	items: 1,
	mode: "gallery",
	speed: 600,
	mode: "gallery",
	prevButton: ".b-prev",
	nextButton: ".b-next",
	nav: false,
	mouseDrag: true,
	responsive: {
		1350: {
			mouseDrag: false,
			touch: false,
		},
	},
});
var slider2 = tns({
	container: ".item-slider",
	items: 2,
	gutter: 38,
	speed: 300,
	prevButton: ".b-prev",
	nextButton: ".b-next",
	nav: false,
	touch: false,
});

// скрывает меню при скроле
const header = document.querySelector(".header");
let scroll = 0;
let burgerMenuActive = false;

document.addEventListener("scroll", () => {
	if (window.pageYOffset > scroll) {
		header.classList.add("header_hide");
		scroll = window.pageYOffset;
	}
	if (window.pageYOffset < scroll || burgerMenuActive) {
		header.classList.remove("header_hide");
		scroll = window.pageYOffset;
	}
});

// burgerMenu
const hamburger = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("is-active");
	burgerMenu.classList.toggle("burger-menu_active");
	body.classList.toggle("no-scroll");
	burgerMenuActive = !burgerMenuActive;
});

// Обратный звонок
const backCall = document.querySelectorAll(".back-call");
const closeWindow = document.querySelectorAll(".close-window");
const pupUp = document.querySelector(".pop-up-wrap");
const pupUpInput = document.querySelector(".pop-up_input");
const pupUpSuccess = document.querySelector(".pop-up_success");

for (let i of backCall) {
	i.addEventListener("click", () => {
		pupUp.classList.add("pop-up-activ");
		pupUpInput.classList.add("pop-up-activ");
		body.classList.add("no-scroll");
	});
}

for (let i of closeWindow) {
	i.addEventListener("click", () => {
		pupUp.classList.remove("pop-up-activ");
		pupUpInput.classList.remove("pop-up-activ");
		pupUpSuccess.classList.remove("pop-up-activ");
		body.classList.remove("no-scroll");
	});
}

const userName = document.querySelector("#userName");
const userPhone = document.querySelector("#userPhone");
let phoneComplete = false;
document.querySelector(".b_send").addEventListener("click", () => {
	if (!phoneComplete) {
		userPhone.focus();
		userPhone.setCustomValidity("Укажите полностью номер телефона.");
	} else {
		userPhone.setCustomValidity("");
	}
	if (userName.validity.valid && userPhone.validity.valid) {
		userPhone.setCustomValidity("");
		pupUpInput.classList.remove("pop-up-activ");
		pupUpSuccess.classList.add("pop-up-activ");

		console.log("Имя " + userName.value);
		console.log("Телефон " + userPhone.value);

		setTimeout(() => {
			userName.value = "";
			userPhone.value = "";
		}, 200);
	}
});

// speaker-points
const speakerPoints = document.querySelectorAll(".plus-title__wrap");
for (let i of speakerPoints) {
	const titleBlock = i.querySelector(".title-block");
	const close = i.querySelector(".title-block__close");
	const plusTitle = i.querySelector(".plus-title");
	let plusTitleActive = false;

	function daaClass(event) {
		if (!titleBlock.contains(event.target)) {
			titleBlock.classList.remove("title-block-active");
			document.removeEventListener("click", daaClass);
			plusTitleActive = false;
		}
	}

	plusTitle.addEventListener("click", () => {
		if (!plusTitleActive) {
			titleBlock.classList.add("title-block-active");
			plusTitleActive = true;
			setTimeout(() => {
				document.addEventListener("click", daaClass);
			}, 50);
		} else {
			titleBlock.classList.remove("title-block-active");
			document.removeEventListener("click", daaClass);
			plusTitleActive = false;
		}
	});

	close.addEventListener("click", () => {
		titleBlock.classList.remove("title-block-active");
		if (plusTitleActive) {
			document.removeEventListener("click", daaClass);
		}
		plusTitleActive = false;
	});
}
