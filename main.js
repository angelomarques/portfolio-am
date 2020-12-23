//menu animation
const hambRect1 = document.querySelector(".rect1");
const hambRect2 = document.querySelector(".rect2");
const hambRect3 = document.querySelector(".rect3");
const menu = document.querySelector(".menu");

const menuActive = document.querySelector(".menu-active");
const logoTitle = document.querySelector(".nav-bar h3");
const hambRect = document.querySelectorAll(".hamb-rect");

menu.addEventListener("click", () => {
  hambRect1.style.transform = "translateY(200%) rotate(45deg)";
  hambRect3.style.transform = "translateY(-200%) rotate(-45deg)";
  hambRect2.style.opacity = "0";
  if (
    menuActive.style.transform == "" ||
    menuActive.style.transform == "translateY(-100%)"
  ) {
    menuActive.style.transform = "translateY(0%)";
    logoTitle.style.color = "#161616";
    hambRect.forEach((e) => (e.style.backgroundColor = "#161616"));
  } else {
    menuActive.style.transform = "translateY(-100%)";
    logoTitle.style.color = "#dee3f5";
    hambRect.forEach((e) => (e.style.backgroundColor = "#dee3f5"));
    hambRect1.style.transform = "";
    hambRect3.style.transform = "";
    hambRect2.style.opacity = "1";
  }
});

//typing effect
const textTyping = document.querySelector("#text-typing");
const contentText = [
  "Web Designer",
  "Front End Developer",
  "JavaScript Programmer",
];
let counter = 0;
let index = 0;

let typingEffect;

function checkerFunc() {
  setTimeout(gen, 3000)
};

function gen() {
  if (counter == 0) {
    textTyping.innerHTML = "";
    typingEffect = setInterval(typingFunc, 150);
  }
  if (counter != 0) {
    checkerFunc()
    counter = 0;
    if (index == 2) {
      index = 0;
    } else index++;
  }
}

let typingFunc = () => {
  textTyping.innerHTML += contentText[index][counter];
  counter++;
  if (counter== contentText[index].length) {
    clearInterval(typingEffect);
    gen();
  }
};

gen();
