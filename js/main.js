/*
* JSnack 1
*/
// Inserisci 2 numeri con prompt
var numberOne = parseInt( prompt( 'inserisci un numero'));
var numberTwo = parseInt( prompt( 'inserisci un numero'));

// Condizione + stampa il numero maggiore
if (numberOne > numberTwo) {
    text.innerHTML = 'il numero maggiore è : ' + numberOne;
    console.log('Ha vinto il numero 1');
}
else if (numberOne < numberTwo){
  text.innerHTML = 'il numero maggiore è : ' + numberTwo;
  console.log('Ha vinto il numero 2');
}
else {
  console.log('Hai pareggiato');
}
// Risultato
var result = document.getElementById('text');

/*
* JSnack 2
*/

// L’utente inserisce due parole in successione, con due prompt.
var wordOne = prompt('inserisci una parola');
var wordTwo = prompt( 'inserisci una parola');

// Condizione che stampa prima la parola più corta, uno spazio e poi la parola più lunga.
if (wordOne.length > wordTwo.length) {
  console.log('La parola 2 è più corta')
  text.innerHTML = wordTwo + ' ' + wordOne;
} else {
  console.log('La parola 1 è più corta')
  text.innerHTML = (wordOne + ' ' + wordTwo);
}

// Risultato
var result = document.getElementById('text');

/* JSnack 3
*
*/

var somma = 0;
/* chiedere 5 volte all’utente di inserire un numero
+ stampa la somma di tutti i numeri inseriti. */

for (var i = 0; i <= 4; i++) {
  var number = parseInt( prompt( 'inserisci un numero'));
  if (somma += number) {
    document.getElementById('text').innerHTML = 'la somma dei numeri è : ' + somma;
  }
}
console.log(somma);

/* JSnack 4
*
*/

// Inserire il propio nome
var name = prompt('Inserire nome')
console.log(name);

// Lista di chi può accedere
var list = ['Paolo', 'Fabio', 'Lorenzo', 'Marco', 'Luca', 'Anna', 'Monica', 'Elisa'];
console.log(list);

// Per la ricerca nell'arrey
var nameFound = false;

// Ciclo
for (var i = 0; i < list.length; i++) {
  var item = list[i];
if (name === item) {
  nameFound = true;
}
}

// Condizione
if (nameFound == true) {
  text.innerHTML = 'Puoi partecipare' + ' ' + name;
} else {
  text.innerHTML = 'Non puoi partecipare' + ' ' + name;
}

// Risultato
var result = document.getElementById('text');

/* JSnack 5
 *
 */

// Crea un array vuoto.
 var empty = [];
// Chiedi per 6 volte all’utente di inserire un numero
  for (var i = 0; i < 6; i++) {
   var number = parseInt( prompt( 'inserisci un numero'));
   if (number % 2 != 0) {
    empty.push(number);
   }
 }
 console.log(empty);
 document.getElementById('text').innerHTML = 'i numeri dispari sono : ' + ' ' + empty;
