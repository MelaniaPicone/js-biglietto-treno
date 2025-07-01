// richiesta all'utente
const distanceNum = prompt('Inserisci qui la distanza che vuoi percorrere');
const yearsNum = prompt('Inserisci qui la tua età');
console.log(distanceNum);
console.log(yearsNum);

// prezzo del biglietto
const ticket = 0.21;
const ticketTot = ticket * distanceNum;
console.log(ticketTot);

// applicazione dello sconto
const minNum = 18;
const overNum = 65;

const ticketDiscountMin = 0.20;
const ticketDiscountOver = 0.40;

if(yearsNum < minNum) {
console.log("viene applicato uno sconto del 20% sul biglietto")
}

else if(yearsNum >= overNum){
  console.log ("viene applicato uno sconto del 40% sul biglietto")
}

else {
console.log("il biglietto non è soggetto ad alcuno sconto")
}