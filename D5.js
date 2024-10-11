/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets);
console.log("Es. 1");
for (let i = 0; i < pets.length; i++) {
  const singlePet = pets[i];

  console.log(singlePet);
}
/* In questo esercizio ho usato un ciclo for per fare in modo che mi stampasse in console, uno per volta, i nomi di ogni animale.
   Ho rinominato una variabile const, per leggibilità, single pet */

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const newPets = pets.slice().sort();
console.log("Es. 2");
console.log("Array prima:", pets);
console.log("Array dopo:", newPets);
/* Anche se non richiesto ho usato il metodo slice() per creare una copia superficiale dell'array
(in quanto non c'erano oggetti all'interno), così da non modificare l'originale. Ho poi usato il metodo sort() 
sulla copia newPets così da poter ordinare in ordine alfabetico l'array copia. */

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//const step pets.reverse();
//console.log(pets);

const reversePets = function (array) {
  const stepArray = array.slice().reverse();
  return stepArray;
};
const step = reversePets(pets);
console.log("Es. 3", step);
/* Anche se non richiesto ho usato il metodo slice() per creare una copia superficiale dell'array
(in quanto non c'erano oggetti all'interno), così da non modificare l'originale. */
//Oppure:
const step2 = pets.slice().reverse();
console.log("Funziona anche così?", step2); //Sì non era necessario usare la funzione.

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const pets2 = pets.slice();
const p3 = pets2.shift();
const p4 = pets2.push(p3);

console.log("Es. 4", pets2);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const licensePlate = ["GH435IJ", "CC767CC", "GA372DT"];
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.plate = licensePlate[i];
}
console.log("Es. 5", cars);
/* Qui mi sono creata un array di targhe (con la stessa lunghezza di cars)
   in modo che il for ciclicamente mi andasse ad inserire una targa diversa per ogni macchina. */

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Fiat",
  model: "Panda",
  color: "caffè_latte",
  trims: ["active", "no_style", "safe-x"],
};
cars.push(newCar);
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.trims.pop();
}
console.log("Es. 6", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
let justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const trim = cars[i].trims[0];
  justTrims.push(trim);
}
console.log("Es. 7", justTrims);
console.log("_________________");
/* Qui ho creato una variabile trim con all'interno il primo valore ([0]) 
della proprietà trims, dopodichè ho pushato in justTrims i valori di trim. */

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const results = [];
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.color[0] === "b") {
    results.push("Buzz");
    console.log("Buzz");
  } else {
    results.push("Fizz");
    console.log("Fizz");
  }
}
console.log("Es. 8", results);
/* Probabilmente non era necessario ma ho pushato dentro un array results 
tutti i risultati di if else così da avere in linea in console tutti i risultati ([ "Fizz", "Buzz", "Buzz", "Fizz" ]) */

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105, 12,
];
/*let i = 0;
while (i < numericArray.length) {
  const num =
    numericArray[
      i
    ];  
   if (num < 32) {
    console.log(num);
  } 
}niente, se eseguo questo if anche con else mi crascha tutto :(  */

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const number = [];

for (let i = 0; i < charactersArray.length; i++) {
  let char = charactersArray[i];
  switch (char) {
    case "g":
      number.push(7);
      break;

    case "n":
      number.push(14);
      break;

    case "u":
      number.push(21);
      break;

    case "z":
      number.push(26);
      break;

    case "d":
      number.push(4);
      break;
  }
}
console.log("Es. 10", charactersArray);
console.log(number);
/* su internet ho visto che c'era la possibilità di risolverlo con Map ma non avendolo visto a lezione l'ho eseguito così.
   ho però il sospetto che dovessi fare qualcosa di diverso. */
