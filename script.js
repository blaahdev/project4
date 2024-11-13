// --- VARIABLES
let isLight = true;
// --- QUERY SELECTORS
const toggle = document.querySelectorAll(".toggle");
const body = document.getElementById("body");
const bgText = document.getElementById("bgText");
// ---- RENDERS
// ---- ANIMATE
// ---- EVENT LISTENERS
toggle.forEach((eachToggle) => {
  eachToggle.addEventListener("click", () => {
    body.classList = !isLight ? "light" : "dark";
    isLight = !isLight;
  });
});
// --- EXECUTES
