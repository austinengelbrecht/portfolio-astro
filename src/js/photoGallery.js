let index = 0;

document.getElementById("next")?.addEventListener("click", nextImg);
document.getElementById("prev")?.addEventListener("click", prevImg);

const imageButtons = document.querySelectorAll(".image-button");
const primaryImg = document.querySelector(".gallery-primary-img");

function switchImg(src, alt) {
  primaryImg.src = src;
  primaryImg.alt = alt;
}

function prevImg() {
  if (index > 0) {
    index--;
    switchImg(this.data[index].src, this.data[index].alt);
  }
}

function nextImg() {
  if (index < this.data.length - 1) {
    index++;
    switchImg(this.data[index].src, this.data[index].alt);
  }
}

imageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imgSrcEl = button.querySelector('img').src; 
    const imgAltEl = button.querySelector('img').alt; 

    switchImg(imgSrcEl, imgAltEl);
  })
} 

