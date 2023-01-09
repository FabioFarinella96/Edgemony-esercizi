// Esercizio 1
// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// nb. ogni singola operazione sara una arrow function

// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

const addition = (num1, num2) => num1 + num2;
const substraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

// console.log(addition(10, 10));
// console.log(substraction(20, 10));
// console.log(multiplication(10, 10));
// console.log(division(20, 10));

function calculator(operation, num1, num2) {
  operation = prompt("Inserisci un'operazione");
  num1 = prompt("Inserisci un numero");
  num2 = prompt("Inserisci un secondo numero");
  if (operation === "+") {
    return +num1 + +num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  }
}

// console.log(calculator());

// ------------------------------------------------------------------------

// Avanzato
// Provare a completare l'esercizio sopra applicando qualche callback. Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

function operation(operator, myOperation) {
  return operator + " " + myOperation;
}

console.log(operation("somma:", addition(20, 10)));
console.log(operation("differenza:", substraction(20, 10)));
console.log(operation("moltiplicazione:", multiplication(10, 10)));
console.log(operation("divisione:", division(10, 10)));

// Un altro esempio di callback

function showValue(value) {
  console.log(value);
}

function sum(num1, num2, callback) {
  let result = num1 + num2;

  callback(result);
}

sum(20, 20, showValue);
