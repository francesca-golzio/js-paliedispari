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
    console.log(reversedWord);
    














