let isHidden = false;

const classesToHide = [
	"nav-bar-layer",
	"control-bar-layer",
	"side-drawer-button",
];

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "v") {
    isHidden = !isHidden;

    classesToHide.forEach(className => {
      document.querySelectorAll(`.${className}`).forEach(el => {
        el.style.visibility = isHidden ? "hidden" : "visible";
      });
    });
  }
});