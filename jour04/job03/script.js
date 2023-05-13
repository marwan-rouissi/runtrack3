function jsonValueKey(string) {

    let inputVal = document.getElementById("in").value;

    document.getElementById("exp").innerHTML = string[inputVal]; 
   
}
    
$(document).ready(function () {

$("#button").click( function() {
jsonValueKey(string);
})
});

$(document).ready(function () {
    fetch('pokemon.json')
    .then(res => {
        return res.text()
    }).then(text => {
    $("button").click(function () {
        document.getElementById("exp").innerHTML = text;
    });
})
})