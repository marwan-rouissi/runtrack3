const joursF2020 = ["2020-01-01", "2020-04-13", "2020-05-01", "2020-05-08", "2020-05-21", "2020-06-01", "2020-07-14", "2020-08-15", "2020-11-01", "2020-11-11", "2020-12-25"]
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


function jourtravail(date) {
    var d = new Date(date);
    var j = d.getDate();
    // var mois = d.getMonth();
    let day = jours[d.getDay()];
    let month = mois[d.getMonth()];

        if (joursF2020.includes(date)) {
            console.log("Le",day, j, month, "2020 est un jour férié.")
        }
        else if (day == "Samedi" | day == "Dimanche") {
            console.log("Non,", day, j, month, "2020 est un week-end.")
        }
         else {console.log("Oui, le ", day, j, month, "2020 est un jour travaillé.")}
    }

jourtravail("2020-01-01")
jourtravail("2020-06-09")
jourtravail("2020-06-28")