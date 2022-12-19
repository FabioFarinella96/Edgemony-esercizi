// operazioni

let operation = prompt("Aggiungi un operazione");

let firstNumber = prompt("Aggiungi un numero");

let numFirstNumber = parseInt(firstNumber);

let secondNumber = prompt("Aggiungi un secondo numero");

let numSecondNumber = parseInt(secondNumber);

if (operation === "+" || operation === "addizione") {
  console.log(
    "Il risultato è ",
    parseInt(firstNumber) + parseInt(secondNumber)
  );
} else if (operation === "-" || operation === "sottrazione") {
  console.log("Il risultato è " + (firstNumber - secondNumber));
} else if (operation === "*" || operation === "moltiplicazione") {
  console.log("Il risultato è " + firstNumber * secondNumber);
} else if (operation === "/" || operation === "divisione") {
  console.log("Il risultato è " + firstNumber / secondNumber);
} else {
  console.log("L'operazione non è corretta");
}

// con switch

switch (operation) {
  case "addizione":
    alert("Il risultato è ", parseInt(firstNumber) + parseInt(secondNumber));
    break;
  case "sottrazione":
    alert("Il risultato è " + (firstNumber - secondNumber));
    break;
  case "moltiplicazione":
    alert("Il risultato è " + firstNumber * secondNumber);
    break;
  case "divisione":
    alert("Il risultato è " + firstNumber / secondNumber);
    break;
  default:
    console.log("Il risultato non è corretto");
}
