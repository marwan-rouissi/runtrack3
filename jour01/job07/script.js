function jourtravail(jour, mois, année) {
const joursfériés  = {
    01: 01,
    04: 13,
    05: 01,
    05: 08,
    05: 21,
    06: 01,
    07: 14,
    08: 15,
    11: 01,
    11: 11,
    12: 25
}
jf = [[01, 04, 05, 05, 06, 07, 08, 11, 11, 12][01, 13, 01, 08, 21, 01, 14, 15, 01, 11, 25]]

d = {mois: jour}

for (var date in jf) {
    console.log(joursfériés)
if (mois in jf[0] & jour in jf[1][index])
if (d == date) {
    console.log("Le " + jour +"/" + mois +  " est un jour férié." )
} else {console.log("Oui, jour mois année est un jour travaillé.")}
} 
}
jourtravail(21, 05, 2020)

// reprendre 