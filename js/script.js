const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "../images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "../images/logo-bookmark.svg");
  }
});

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");

  const classString = e.target.getAttribute("data-target");

  document.getElementsByClassName(classString)[0].classList.remove("hidden");
}
