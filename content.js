let isHidden = false;

const classesToHide = [
	"nav-bar-layer",
	"control-bar-layer",
	"side-drawer-button",
];

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "v") {
    isHidden = !isHidden;

    document.querySelectorAll("*").forEach(el => {
      el.classList.forEach(className => {
        if (classesToHide.some(classTitle => className.startsWith(classTitle))) {
          el.style.visibility = isHidden ? "hidden" : "visible";
        }
      });
    });
  }
});