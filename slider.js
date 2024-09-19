const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

const imagesLength = images.length;
let sliderNumber = 1;

for (let i = 0; i < imagesLength; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    sliderNumber = i + 1;
    button.style.backgroundColor = "black";
  });
});

const changeDotColor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = "black";
};

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
};

const firtsSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

rightArrow.addEventListener("click", () => {
  sliderNumber < imagesLength ? nextSlide() : firtsSlide();
  changeDotColor();
});

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
};
const lastSlide = () => {
  slider.style.transform = `translateX(-${(imagesLength - 1) * 800}px)`;
  sliderNumber = imagesLength;
};

leftArrow.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : lastSlide();
  changeDotColor();
});
