/* is it working? */
//console.log("🟢 it's working...")

/* 🪞 Palidroma */

  /* Chiedo all’utente di inserire una parola */

    /* creo un prompt e lo salvo in una variabile */
    const userWord = 'Anna'/* prompt('Type a word, please') */
    //console.log(userWord);

  /* Creo una funzione, per capire se la parola inserita è palindroma */
    
    /* Creo un array vuoto in cui conservare le lettere nell'ordine inverso */  
    let reversedLettersOrder = [];

    /* All'interno di un ciclo for()... */    
    for(let i = 0; i < userWord.length; i++) {
      /* prendo ogni lettera nell'ordine */
      /* e la salvo in una variabile */
      const character = userWord.charAt(i);
      //console.log(character);
      /* aggiungo il valore (lettera) all'array creato prima */
      reversedLettersOrder.unshift(character);
      //console.log(reversedLettersOrder);      
    }

    /* Unisco le lettere ottenute (elementi dell'array) per riformare una parola, che salvo in una variabile */
    reversedWord = reversedLettersOrder.join('');
    //console.log(reversedWord);
    
    /* Confronto le parole per verificare "Palindroma?" */
      /* Trasformo le due parole in lowercase (per non avere problemi di case sensitive) e salvo i risultati in altrettante variabili*/
      const userWordToLowCase = userWord.toLowerCase();
      //console.log(userWordToLowCase);  
      const reversedWordToLowCase = reversedWord.toLowerCase();
      //console.log(reversedWordToLowCase);

      /* confronto le parole e restituisco un messaggio (salvato in una variabile*/
      let message;
      if(reversedWordToLowCase === userWordToLowCase) {
        message = `${userWord} è una parola palindroma`;
        //console.log(message);        
        document.writeln(message);        
      } else {
        message = `${userWord} non è una parola palindroma`;
        //console.log(message);        
        document.writeln(message);        
      }











