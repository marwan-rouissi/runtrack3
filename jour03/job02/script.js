var rb1 = document.getElementById("1");
var rb2 = document.getElementById("2");
var rb3 = document.getElementById("3");
var rb4 = document.getElementById("4");
var rb5 = document.getElementById("5");
var rb6 = document.getElementById("6");

var text = document.getElementById("gameO");

var fullRB = [rb1, rb2, rb3, rb4, rb5, rb6];
var finalRB = [];

$(document).ready(function() {
    var mB = $("#mainBlock");
    var divs = mB.children();
    var game = $("#gameBlock");

    $("#shuffle").click(function () {
        console.log(mB.divs);
        console.log(divs);

        while (divs.length) {
            mB.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    })

    $("img").click(function () {
        // $("#slot1").append(this);
        game.append(this);
        finalRB.push(this);

        if (fullRB.length == finalRB.length) {
            console.log(finalRB)
            console.log(rb1)
            if (finalRB[0] == rb1) {
                if (finalRB[1] == rb2) {
                    if (finalRB[2] == rb3) {
                        if (finalRB[3] == rb4) {
                            if (finalRB[4] == rb5) {
                                if (finalRB[5] == rb6) {
                                    text.innerHTML = "Vous avez gagnez!";
                                    text.style.color = "green"; 
                                }
                            }
                        }            
                    }
                }
            } else {text.innerHTML = "Vous avez perdu!"; text.style.color = "red";}
        } 
    })
});
