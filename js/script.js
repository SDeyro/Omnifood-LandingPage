// Mobile Navigation
const headerEl = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
const allLinks = document.querySelectorAll("a:link");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault;

    // Close the mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Get the current year for copyright
const yearEl = document.querySelector(".year");
currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
