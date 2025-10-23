document.addEventListener("DOMContentLoaded", () => {
  const btnMo = document.querySelector(".btn-mo");
  const btnClose = document.querySelector(".btn-close");
  const gnb = document.querySelector(".gnb");

  btnMo.addEventListener("click", () => {
    gnb.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    gnb.classList.remove("active");
  });
});
