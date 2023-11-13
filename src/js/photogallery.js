let imgIndex = 0;

document.getElementById("next")?.addEventListener("click", nextImg);
document.getElementById("prev")?.addEventListener("click", prevImg);

const carouselImgs = document.querySelectorAll(".gallery-carousel-button-img");
const imageButtons = document.querySelectorAll("#carousel-button");
const primaryImg = document.querySelector(".gallery-primary-img");

function switchImg(src, alt) {
  primaryImg.src = src;
  primaryImg.alt = alt;
}

function prevImg() {
  if (imgIndex > 0) {
    imgIndex--;
    switchImg(carouselImgs[imgIndex].src, carouselImgs[imgIndex].alt);
  }
}

function nextImg() {
  if (imgIndex < carouselImgs.length - 1) {
    imgIndex++;
    switchImg(carouselImgs[imgIndex].src, carouselImgs[imgIndex].alt);
  }
}

imageButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const imgSrcEl = button.querySelector("img").src;
    const imgAltEl = button.querySelector("img").alt;

    imgIndex = index;
    switchImg(imgSrcEl, imgAltEl);
  });
});
