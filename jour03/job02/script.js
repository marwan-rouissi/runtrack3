const string = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation:"2019"
    };

    function jsonValueKey(string) {

            let inputVal = document.getElementById("in").value;
  
            document.getElementById("exp").innerHTML = string[inputVal]; 
           
        }
            
    $(document).ready(function () {
    
    $("#button").click( function() {
        jsonValueKey(string);
    })
    });