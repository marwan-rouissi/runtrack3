var btnCallFunction = document.getElementById("button");
var click = 0

function addone() {
  click ++;
  document.getElementById("compteur").textContent = click;
  }

btnCallFunction.addEventListener("click", addone);