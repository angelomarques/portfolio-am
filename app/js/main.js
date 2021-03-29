const menuBtn = document.querySelector(".header__hamburger");
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".overlay__navbar");
const navbarLink = document.querySelectorAll(".overlay__navbar .nav-link");

const closeNavbar = () => {
  menuBtn.classList.remove("active");
  overlay.classList.add("fade-out");
  overlay.classList.remove("fade-in");
  document.body.style.overflowY = 'visible';
  setTimeout(() => {
    overlay.classList.remove("fade-out");
  }, 300);
};

menuBtn.addEventListener("click", () => {
  if (overlay.classList.contains("fade-in")) {
    closeNavbar();
  } else {
    menuBtn.classList.add("active");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    document.body.style.overflowY = 'hidden';
  }
});

navbarLink.forEach((link) => {
  link.addEventListener("click", () => {
    closeNavbar();
  });
});

const contactForm = document.querySelector(".contact__form");

//this resize the textarea
const textarea = document.querySelector(".contact__form textarea");

textarea.addEventListener("input", () => {
  if (textarea.scrollHeight > 200) {
    textarea.style.height = textarea.scrollHeight + "px";
  }

  //console.log(textarea.scrollHeight)
  // //this if statement sets the correct height when the text is erased it
  // if (textarea.scrollHeight % 26 != 0) {
  //   for (let i = 2; i < 10; i++) {
  //     if (textarea.scrollHeight < 26 * i && textarea.scrollHeight > 26 * (i - 1)) {
  //       textarea.style.height = 26 * (i - 1) + "px";
  //     }
  //   }
  // }
});
