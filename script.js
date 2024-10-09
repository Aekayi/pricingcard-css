const getcards = document.querySelector(".cards");
let pressed = false;
let startX = 0;

getcards.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  console.log(startX);
});
getcards.addEventListener("mouseleave", function (e) {
  pressed = false;
});
window.addEventListener("mouseup", function (e) {
  pressed = false;
});
getcards.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft = startX - e.clientX;
});
