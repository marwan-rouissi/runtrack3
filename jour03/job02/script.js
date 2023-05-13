

$(document).ready(function() {
    var mB = $("#mainBlock");
    var divs = mB.children();
    var game = $("#gameBlock");
    var gameDivs = game.children();
    console.log(divs)
    $("#shuffle").click(function () {
        
        while (divs.length) {
            mB.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    })

    $("img").click(function () {
        $("#slot1").append(this);
        

    })

});