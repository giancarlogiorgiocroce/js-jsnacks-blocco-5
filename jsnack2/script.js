/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/


/*****************************
    VARIABILI GLOBALI
******************************/
let zucchineCorte = [];
let zucchineLunghe = [];

const arrayZucchine = [
    {
        varietà: "Zucchina nera",
        peso: 10,
        lunghezza: 10
    },
    {
        varietà: "Zucchina ortolana",
        peso: 20,
        lunghezza: 11
    },
    {
        varietà: "Zucchina romanesca",
        peso: 30,
        lunghezza: 12
    },
    {
        varietà: "Zucchina lunga fiorentina",
        peso: 40,
        lunghezza: 13
    },
    {
        varietà: "Zucchina siciliana",
        peso: 50,
        lunghezza: 14
    },
    {
        varietà: "Zucchina striata",
        peso: 60,
        lunghezza: 15
    },
    {
        varietà: "Zucchina bianca triestina",
        peso: 70,
        lunghezza: 16
    },
    {
        varietà: "Zucchina rigata pugliese",
        peso: 80,
        lunghezza: 17
    },
    {
        varietà: "Zucchina tonda di Piacenza",
        peso: 90,
        lunghezza: 18
    },
    {
        varietà: "Zucchina tonda di Nizza",
        peso: 100,
        lunghezza: 19
    }
]


/*****************************
    FUNZIONI DI UTILITà
******************************/
function dividiZucchine(){
    for (let i in arrayZucchine){
        if(arrayZucchine[i].lunghezza < 15){
            zucchineCorte.push(arrayZucchine[i]);
        } else{
            zucchineLunghe.push(arrayZucchine[i]);
        }
    }
}

function sommaPeso(array){
    let somma = 0;
    for (let i in array){
        somma = somma + array[i].peso;
    }
    return somma;
}


/*****************************
    INIZIALIZZAZIONE
******************************/
inizia();

function inizia(){
    dividiZucchine();
    document.getElementById("stampa-uno").innerHTML = `Le zucchine sotto i 15cm pesano in totale ${sommaPeso(zucchineCorte)} grammi.`;
    document.getElementById("stampa-due").innerHTML = `Le zucchine sopra i 15cm pesano in totale ${sommaPeso(zucchineLunghe)} grammi.`;
}

