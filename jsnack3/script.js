/*
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/


/*****************************
    VARIABILI GLOBALI
******************************/
// const button = document.getElementById("start-btn");
// const testo = document.getElementById("text");
// const stringaInserita = testo.value;
const stringaInserita = "Ciao!";
console.log("La stringa inserita è:", stringaInserita);


/*****************************
    FUNZIONI DI UTILITà
******************************/
function giraStringa(str){
    const array = str.split("");

    for(let i = array.length-1; i >= 0; i--){
        document.getElementById("output").innerHTML += array[i];
    }
}


/*****************************
    INIZIALIZZAZIONE
******************************/
giraStringa(stringaInserita);

// button.addEventListener("click", giraStringa(stringaInserita));
// console.log("-", stringaInserita);

