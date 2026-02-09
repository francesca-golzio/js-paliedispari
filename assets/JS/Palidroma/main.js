/* is it working? */
//console.log("🟢 it's working...")

/* 🪞 Palidroma */

  /* Chiedo all’utente di inserire una parola */
    
    /* creo un prompt e lo salvo in una variabile */
      const userWord = 'anna'/* prompt('Type a word, please') */;
      //console.log(userWord);


  /* Creo una funzione, per capire se la parola inserita è palindroma */
    
    /* Raccolgo i valori */
    let message;

  function isItPalindrom(word) {

    /* Creo un array vuoto in cui conservare le lettere nell'ordine inverso */  
    let reversedLettersOrder = [];

    /* All'interno di un ciclo for()... */    
    for(let i = 0; i < word.length; i++) {
      /* ... prendo ogni lettera nell'ordine */
      /* e la salvo in una variabile */
      const character = word.charAt(i);
      //console.log(character);
      /* ... aggiungo il valore (lettera) all'array creato prima */
      reversedLettersOrder.unshift(character);
      //console.log(reversedLettersOrder);      
    }

    /* Unisco le lettere ottenute (elementi dell'array) per riformare una parola, che salvo in una variabile */
    reversedWord = reversedLettersOrder.join('');
    //console.log(reversedWord);
    
    /* Confronto le parole per verificare "Palindroma?" */
      
      /* Trasformo le due parole in lowercase (per non avere problemi di case sensitive) e salvo i risultati in altrettante variabili*/
      const wordToLowCase = word.toLowerCase();
      //console.log(wordToLowCase);  
      const reversedWordToLowCase = reversedWord.toLowerCase();
      //console.log(reversedWordToLowCase);

      /* confronto le parole e restituisco un messaggio (salvato in una variabile*/
      if(reversedWordToLowCase === wordToLowCase) {
        message = `${word} è una parola palindroma`;
        //console.log(message);        
        document.writeln(message);        
      } else {
        message = `${word} non è una parola palindroma`;
        //console.log(message);        
        document.writeln(message);        
      };
    return message;
}
isItPalindrom(userWord);
//console.log(message);


