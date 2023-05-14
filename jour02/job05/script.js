document.addEventListener("scroll", () => {
  var footer = document.getElementById("myFooter")
  let scroll = this.scrollY;

  if (scroll < 500) {
    footer.style.backgroundColor = "blue";
    footer.style.backgroundImage = "";
  }
  if (scroll > 500) {
    footer.style.backgroundImage = "linear-gradient(to right, blue, white)";
  }
  if (scroll > 1000) {
    footer.style.backgroundImage = "linear-gradient(to right, blue, white, red)";
  }
  if (scroll > 1500) {
    footer.style.backgroundImage = "linear-gradient(to right, blue, white, red, yellow)";
  }
  if (scroll > 2000) {
    footer.style.backgroundImage = "linear-gradient(to right, blue, white, red, yellow, black)";
  }
  if (scroll > 2500) {
    footer.style.backgroundImage = "linear-gradient(to right, blue, white, red, yellow, black, grey)";
  }
  if (scroll > 3000) {
    footer.style.backgroundImage = "linear-gradient(to right, blue, white, red, yellow, black, grey, green)";
  }
});