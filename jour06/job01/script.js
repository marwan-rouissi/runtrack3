window.addEventListener("resize" , function() {
    var L = document.getElementById("L");
    
    if (window.matchMedia("(max-width: 1280px)").matches) {

        L.href = "style4.css";
      } 
    if (window.matchMedia("screen and (min-width: 1281px) and (max-width: 1679px)").matches) {

        L.href = "style3.css";
      }
    if (window.matchMedia("screen and (min-width: 1681px) and (max-width: 1920px)").matches) {

        L.href = "style2.css";
      }

})