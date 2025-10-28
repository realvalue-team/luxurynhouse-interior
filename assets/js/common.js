document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("#sh_snb li");
  const currentPath = window.location.pathname.split("/").pop();

  menuItems.forEach((li) => {
    const link = li.querySelector("a");
    if (!link) return;

    const href = link.getAttribute("href").replace("./", "", "../business/");
    if (href === currentPath) {
      li.classList.add("on");
    } else {
      li.classList.remove("on");
    }
  });
});
