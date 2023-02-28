"use strict";
// import variables from "./css/_globals.scss";

let projects = document.querySelector(".projects");
let carousel = document.querySelector(".carousel");
let navItems = document.querySelector(".nav-items");
let hamburgerIcon = document.querySelector(".hamburger-menu");
let modal = document.querySelector(".alert");
let contact = document.querySelector(".contact");

const email = "mohamedashrafibraheem@gmail.com";

// show hamburger actions when clicked
hamburgerIcon.addEventListener("click", () => {
  navItems.style.display = "flex";
});

// hide menu when clicked exiting
navItems.addEventListener("click", () => {
  navItems.style.display = "none";
});

// show and hide menu automatically based on screen resizing
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    navItems.style.display = "none";
  } else {
    navItems.style.display = "flex";
  }
});

// copy email to the clipboard
let copyTextToBackground = function () {
  const copiedContent = async () => {
    try {
      navigator.clipboard.writeText(email);

      modal.style.height = "100px";

      setTimeout(() => {
        modal.style.height = "0px";
      }, 2000);
    } catch (error) {
      throw new Error(error);
    }
  };

  copiedContent();
};

contact.addEventListener("click", copyTextToBackground);

// to show projects list
let projectsList = [
  "analytics.svg",
  "bootstrap5.svg",
  "invision.svg",
  "html5.svg",
  "css.svg",
];

let projectCard = "";
function appendProjects(projects) {
  for (let index = 0; index < projects.length; index++) {
    const element = projects[index];

    projectCard += `
              <div class="project-card">
                  <div class="image">
                      <img src="assets/${element}" alt="" />
                  </div>
                  <div class="overlay">
                      <p>Project name</p>
                      <div class="links">
                          <a href="#">
                              <i class="fa-solid fa-arrow-up-right-from-square fa-1x"></i
                          ></a>
                          <a href="#">
                              <i class="fa-brands fa-github fa-1x"></i>
                          </a>
                      </div>
                  </div>
              </div>
          `;
  }
  carousel.innerHTML = projectCard;
}

appendProjects(projectsList);
// the below code should be activated when i have more projects to add carousel behavior

// const projectsWidth = projects.offsetWidth;
// const carouselsWidth = carousel.offsetWidth;
// let shownCarouselWidth;
// let x = 0;

// function move(distanceOfMoving) {
//   shownCarouselWidth = carouselsWidth;
//   let hiddenCarouselArea = 0;
//   hiddenCarouselArea = Math.abs(distanceOfMoving);

//   shownCarouselWidth = carouselsWidth - hiddenCarouselArea;

//   if (shownCarouselWidth == projectsWidth) {
//     console.log("shown Carousel Width: " + shownCarouselWidth);
//     console.log("projects width: " + projectsWidth);
//     console.log("carousel width: " + carouselsWidth);

//     appendProjects(projectsList);
//     console.log("shown after" + shownCarouselWidth);
//   } else if (shownCarouselWidth <= projectsWidth) {
//     shownCarouselWidth = carouselsWidth;
//     hiddenCarouselArea = 0;
//   }

//   carousel.style.left = `-${Math.abs(distanceOfMoving)}px`;
// }

// function decreaseWidth() {
//   x = x - 1;
//   move(x);
// }

// // let movingInterval = setInterval(decreaseWidth, 10);

// function userHovered() {
//   clearInterval(movingInterval);
// }

// function userUnhovered() {
//   movingInterval = setInterval(decreaseWidth, 10);
// }

// // carousel.addEventListener("mouseenter", userHovered);
// // carousel.addEventListener("mouseleave", userUnhovered);
