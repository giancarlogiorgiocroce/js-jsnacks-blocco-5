/*
Jsnack 4
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/


/*****************************
    VARIABILI GLOBALI
******************************/
const arrayBici = [
    {
        nome: "bici normale",
        peso: 15
    },
    {
        nome: "bici da corsa",
        peso: 9.5
    },
    {
        nome: "bici leggera",
        peso: 12
    },
    {
        nome: "BICI CON LE FIAMME SUI LATI",
        peso: 6
    }
]


/*****************************
    FUNZIONI DI UTILITà
******************************/
function comparaPesi(){
    let pesoMinore = arrayBici[0].peso;
    let nomeBici;
    // console.log(arrayBici);
    
    // for (let i in arrayBici){
    //     console.log(arrayBici[i].peso);
    //     if(arrayBici[i].peso < pesoMinore){
    //         pesoMinore = arrayBici[i].peso;
    //         nomeBici = arrayBici[i].nome;
    //     }
    //     console.log(pesoMinore);
    //     console.log(nomeBici);
    // }

    // stampaBici(nomeBici, pesoMinore);

    
    for (let Bici of arrayBici){
        const {peso, nome} = Bici;

        if(peso<pesoMinore){
            pesoMinore = peso;
            nomeBici = nome;
        }
        
    }

    stampaBici(nomeBici, pesoMinore);
}

function stampaBici(chi, quanto){
    const doveStampare = document.querySelector("h1");
    doveStampare.innerHTML = `Wow la ${chi} è veramente la più veloce di tutte pesando solo ${quanto} kg!`
}


/*****************************
    INIZIALIZZAZIONE
******************************/
comparaPesi();

