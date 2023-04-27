const timer = document.querySelector("#Timer");
timer.value = `시작을 눌러요`;
timer.style.fontWeight = "bold";

const play__btn = document.querySelector(".play__btn");
let imgs = document.querySelectorAll("img[alt='sheep']");

function timeCounter() {
  let min = 0;
  let sec = 10;
  timer.value = `0${min} : ${sec}`;
  play__btn.style.pointerEvents = "none";
  setInterval(() => {
    if (sec > 0) {
      sec -= 1;
      timer.value = `00 : 0${sec}`;
    }
  }, 1000);

  setTimeout(() => {
    if (sec === 0) {
      timer.value = `Time over`;
      timer.style.fontSize = `20px`;
      if (count__nums !== 0) {
        prompt("시간초과, 당신의 패배입니다. '내가 졌다' 세번 쓰십시오.");
      }
    }
  }, 10000);

  setTimeout(() => {
    timer.value = `시작을 누르세요`;
    timer.style.fontSize = "15px";
    timer.style.fontWeight = "bold";
    field.style.display = "none";
  }, 12000);
}

const field = document.querySelector(".field");

function randomPosition() {
  field.style.display = "block";
  setTimeout(() => {
    const icons = document.querySelectorAll(".field img");
    icons.forEach((icon) => {
      icon.style.display = "block";
      icon.style.left = `${Math.trunc(Math.random() * 250) + 100}px`;
      icon.style.top = `${Math.trunc(Math.random() * 140) + 100}px`;
    });
  }, 100);
}
let counter = document.querySelector(".counter");
let counter__nums;

field.addEventListener("click", (e) => {
  const target = e.target.dataset.species;
  if (target === undefined) {
    return;
  }
  if (target.includes("sheep")) {
    e.target.style.display = "none";
    counter__nums = counter__nums - 1;
    counter.innerHTML = `<span class="counter__num">${counter__nums}</span>`;
  } else if (target.includes("devil")) {
    alert("사탄을 만졌습니다.");
  }
  if (counter__nums === 0) {
    alert("당신이 이겼습니다.");
  }
});

const relocation__btn = document.querySelector(".relocation__btn");
relocation__btn.addEventListener("click", () => {
  let icons = document.querySelectorAll(".field img");
  icons.forEach((icon) => {
    icon.style.left = `${Math.trunc(Math.random() * 250) + 50}px`;
    icon.style.top = `${Math.trunc(Math.random() * 250) + 10}px`;
  });
});

const guidance__btn = document.querySelector(".guidance__btn");
const control__box = document.querySelector(".control__box");
const toIntro__btn = document.querySelector(".toIntro__btn");
const guidance = document.querySelector(".guidance");
const guidance__btn2 = document.querySelector(".guidance__btn2");
guidance__btn.addEventListener("click", () => {
  guidance.classList.add("turn-out");
  control__box.classList.add("show-up");
  field.removeChild(img1);
  field.removeChild(img2);
  field.removeChild(img3);
  field.removeChild(img4);
  imgs = document.querySelectorAll("img[alt='sheep']");
  counter__nums = imgs.length;
});
guidance__btn2.addEventListener("click", () => {
  guidance.classList.add("turn-out");
  control__box.classList.add("show-up");
  let img = document.createElement("img");
  img.setAttribute("src", "carrot/img/sheep.png");
  img.setAttribute("id", `sheep`);
  img.setAttribute("data-species", "sheep");
  img.setAttribute("alt", "sheep");
  field.appendChild(img);
  let img2 = document.createElement("img");
  img2.setAttribute("src", "carrot/img/sheep.png");
  img2.setAttribute("id", `sheep`);
  img2.setAttribute("data-species", "sheep");
  img2.setAttribute("alt", "sheep");
  field.appendChild(img2);
  let img3 = document.createElement("img");
  img3.setAttribute("src", "carrot/img/sheep.png");
  img3.setAttribute("id", `sheep`);
  img3.setAttribute("data-species", "sheep");
  img3.setAttribute("alt", "sheep");
  field.appendChild(img3);
  let img4 = document.createElement("img");
  img4.setAttribute("src", "carrot/img/devill2.png");
  img4.setAttribute("id", `devil`);
  img4.setAttribute("data-species", "devil");
  img4.setAttribute("alt", "devil");
  field.appendChild(img4);
  imgs = document.querySelectorAll("img[alt='sheep']");
  counter__nums = imgs.length;
});

play__btn.addEventListener("click", () => {
  imgs = document.querySelectorAll("img[alt='sheep']");
  counter__nums = imgs.length;
  counter.innerHTML = `<span class="counter__num">${counter__nums}</span>`;
  timeCounter();
  randomPosition();
  setTimeout(() => {
    play__btn.style.pointerEvents = "all";
  }, 11000);
});
toIntro__btn.addEventListener("click", () => {
  guidance.classList.remove("turn-out");
  control__box.classList.remove("show-up");
  field.style.display = "none";
  window.location.reload();
});
