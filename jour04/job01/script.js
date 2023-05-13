$(document).ready(function () {
    fetch('expression.txt')
    .then(res => {
        return res.text()
    }).then(text => {
    $("button").click(function () {
        document.getElementById("exp").innerHTML = text;
    });
})
})