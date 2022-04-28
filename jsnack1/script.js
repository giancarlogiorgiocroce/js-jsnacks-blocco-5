/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/


/*****************************
    VARIABILI GLOBALI
******************************/
const arrayZucchine = [
    {
        varietà: "Zucchina nera",
        peso: 10,
        lunghezza: 20
    },
    {
        varietà: "Zucchina ortolana",
        peso: 20,
        lunghezza: 20
    },
    {
        varietà: "Zucchina romanesca",
        peso: 30,
        lunghezza: 20
    },
    {
        varietà: "Zucchina lunga fiorentina",
        peso: 40,
        lunghezza: 20
    },
    {
        varietà: "Zucchina siciliana",
        peso: 50,
        lunghezza: 20
    },
    {
        varietà: "Zucchina striata",
        peso: 60,
        lunghezza: 20
    },
    {
        varietà: "Zucchina bianca triestina",
        peso: 70,
        lunghezza: 20
    },
    {
        varietà: "Zucchina rigata pugliese",
        peso: 80,
        lunghezza: 20
    },
    {
        varietà: "Zucchina tonda di Piacenza",
        peso: 90,
        lunghezza: 20
    },
    {
        varietà: "Zucchina tonda di Nizza",
        peso: 100,
        lunghezza: 20
    }
]


/*****************************
    FUNZIONI DI UTILITà
******************************/
function sommaPeso(){
    let somma = 0;
    // console.log("somma", somma);
    for (let i in arrayZucchine){
        somma = somma + arrayZucchine[i].peso;
    }
    // console.log("somma", somma);
    return somma;
}


/*****************************
    INIZIALIZZAZIONE
******************************/
document.querySelector("h1").innerHTML = `Le Zucchine pesano ${sommaPeso()} grammi`;

