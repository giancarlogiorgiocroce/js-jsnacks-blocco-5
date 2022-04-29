/*
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/


/*****************************
    VARIABILI GLOBALI
******************************/
const stringaInserita = prompt("Inserisci una parola.");
console.log("La stringa inserita è:", stringaInserita);


/*****************************
    FUNZIONI DI UTILITà
******************************/
const giraStringa = (str) => str.split("").reverse().join("");

// function giraStringa(str){
//     const array = str.split("");

//     for(let i = array.length-1; i >= 0; i--){
//         document.getElementById("output").innerHTML += array[i];
//     }
// }


/*****************************
    INIZIALIZZAZIONE
******************************/
console.log(giraStringa(stringaInserita));
document.getElementById("output").innerHTML = giraStringa(stringaInserita);

