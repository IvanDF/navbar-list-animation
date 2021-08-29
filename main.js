const list = document.querySelectorAll(".navbar-item");

list.forEach((el) => {
  el.addEventListener("click", () => {
    list.forEach((element) => {
      element.classList.remove("active");
    });

    el.classList.toggle("active");
  });
});
