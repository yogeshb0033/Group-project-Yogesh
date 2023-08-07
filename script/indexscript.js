const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderImages = document.querySelectorAll(".slider img");

let counter = 0;
const imageWidth = sliderImages[0].clientWidth;

rightArrow.addEventListener("click", () => {
  counter++;
  if (counter >= sliderImages.length) {
    counter = 0;
  }
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-imageWidth * counter}px)`;
});

leftArrow.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = sliderImages.length - 1;
  }
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-imageWidth * counter}px)`;
});
