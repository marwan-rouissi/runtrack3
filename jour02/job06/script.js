let myTry = [];

document.addEventListener("keydown", (event) => {

  var img = document.createElement("img");
  img.src = "logo_laplateforme_bleu3.png";

  let key = event.key;
  let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  console.log(key)
  myTry.push(key)
  console.log(myTry)

  if (myTry.length == konamiCode.length & myTry.toString() != konamiCode.toString()) {
    myTry = [];
    console.log("TRY AGAIN")
  }
  else if (key == " ") {
    myTry = [];
    console.log("TRY AGAIN")
  }
  if (myTry.toString() == konamiCode.toString()) {
    console.log("KONAMI");
    document.body.style.background = "blue";
    document.body.style.backgroundImage = "radial-gradient(blue, white)";
    document.body.appendChild(img);
  }

});
