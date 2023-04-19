const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imgContainer = document.querySelector(".image-container");

for (i = 0; i < 4; i++) {
  const img = document.createElement("img");
  img.src =
    "https://picsum.photos/500/300?random=" + Math.floor(Math.random() * 2000);
  imgContainer.append(img);
}

const images = document.querySelectorAll("img");

let currentImg = 1;

next.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

prev.addEventListener("click", () => {
  currentImg--;
  updateImg();
});

let timeout;

function updateImg() {
  clearTimeout(timeout);
  if (currentImg > images.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = images.length;
  }

  imgContainer.style.transform =
    "translateX(-" + (currentImg - 1) * 500 + "px)";

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 5000);
}
updateImg();
