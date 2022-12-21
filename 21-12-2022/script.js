// Esercizio 1
// Sulla base della lezione del giorno:

// scrivere una prima funzione che presa una stringa come argomento,
// ritorni la stessa stringa + la parola bootcamp;

function myFunction(coding) {
  return coding + "bootcamp";
}

console.log(myFunction("coding "));

// Esercizio 2
// scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...)
// e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

let person = {
  name: "Fabio",
  surname: "Farinella",
  age: 26,
  male: true,
  hobby: function () {
    console.log("I like play bass");
  },
  nationality: function () {
    console.log("I'm italian");
  },
};

console.log(person.hobby);
console.log(person.nationality);

// Avanzato
// Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

// Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro un array ([num1, num2]).

function calculator(operation, [num1, num2]) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  }
}

console.log("Il risultato è: ", calculator("*", [10, 3]));
