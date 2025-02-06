const filterBox = document.querySelectorAll(".blog-card");

document
  .querySelector(".blog-filters__list")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;

    let filterClass = event.target.dataset["f"];
    console.log(filterClass);

    filterBox.forEach((elem) => {
      elem.classList.remove("hide");
      if (!elem.classList.contains(filterClass) && filterClass !== "all") {
        elem.classList.add("hide");
      }
    });
  });

document.querySelectorAll(".button-accordion").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header-nav__list").classList.toggle("open");
});

document
  .querySelector(".header-nav__list")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".burger").classList.remove("active");
  });

document
  .querySelector(".header-nav__list")
  .addEventListener("click", function () {
    document.querySelector(".header-nav__list").classList.remove("open");
  });
