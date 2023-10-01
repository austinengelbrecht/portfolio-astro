let index = 0;

document.getElementById("next")?.addEventListener("click", nextImg);
document.getElementById("prev")?.addEventListener("click", prevImg);

const imageButtons = document.querySelectorAll(".image-button");
const primaryImg = document.querySelector(".gallery-primary-img");

function switchImg(newIndex) {
  index = newIndex;
}

function prevImg() {
  if (index > 0) {
    index--;
    primaryImg.src = this.data[index].src;
  }
}

function nextImg() {
  if (index < this.data.length - 1) {
    index++;
    primaryImg.src = this.data[index].alt;
  }
}
