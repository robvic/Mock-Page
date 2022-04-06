// JavaScript Document

const slidesEl = document.querySelector(".slides");
const slideWidth = slidesEl.offsetWidth;
const overalWidth = slidesEl.scrollWidth;
const waitTime = 5000;

function navigate() {
	const x = calculateNewPosition();
	slidesEl.style.transform = `translateX(${x}px)`;
}

function calculateNewPosition() {
	const str = slidesEl.style.transform;
	const x = str ? parseInt(str.match(/-?(\d+)/g)) : 0;

	const atLastSlide = x === -overalWidth + slideWidth;
	
	return atLastSlide ? 0 : x - slideWidth;
}

setInterval(navigate, waitTime);
