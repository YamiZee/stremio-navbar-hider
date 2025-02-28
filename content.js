let isHidden = false;

const classesToHideJS = [];
const classesToHideCSS = [
  "nav-bar-layer",
  "control-bar-layer",
  "side-drawer-button",
  "asbplayer-mobile-video-overlay-container-top",
];

const styleTag = document.createElement("style");
styleTag.id = "toggle-hide-style";

function setVisibilityJS() {
  if (classesToHideJS.length == 0) return;
  document.querySelectorAll("*").forEach((el) => {
    el.classList.forEach((className) => {
      if (
        classesToHideJS.some((classTitle) => className.startsWith(classTitle))
      ) {
        el.style.visibility = isHidden ? "hidden" : "visible";
      }
    });
  });
}

function setVisibilityCSS() {
  if (classesToHideCSS.length == 0) return;
  if (document.head.contains(styleTag)) {
    document.head.removeChild(styleTag);
  }
  if (isHidden) {
    styleTag.innerHTML = classesToHideCSS
      .map(
        (className) => `[class*="${className}"] { display: none !important; }`
      )
      .join("\n");
    document.head.appendChild(styleTag);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "v") {
    isHidden = !isHidden;
    setVisibilityJS();
    setVisibilityCSS();
  }
});
