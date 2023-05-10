var btnCallFunction = document.getElementById("button");

function showhide() {
    var text = document.getElementById("citation");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

btnCallFunction.addEventListener("click", showhide);