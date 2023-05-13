function sommenombrespremiers(nbr1, nbr2) {
    if (nbr1 < 2 | nbr2 < 2) return false;
    else return nbr1 + nbr2; 
}

console.log(sommenombrespremiers(1,2));
console.log(sommenombrespremiers(2,2));