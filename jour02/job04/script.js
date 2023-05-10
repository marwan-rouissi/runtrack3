var txtarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  var key = event.key;
  txtarea.append(key);
})
