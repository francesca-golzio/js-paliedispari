/* is it working? */
//console.log("🟢 it's working...")

/* ✌️🫲 Pari o Dispari ? */

  /* Chiedo all' Utente di rispondere a due prompt */
    /* 1 - Scegli pari o dispari*/
    const userChoice = 'odd'//prompt('Choose and type "even" or "odd"');
    console.log(userChoice);
    
    
    /* 2 - Inserisci un numero da 1 a 5 */
    const userNumb = 4//prompt('Digit a number between 1 and 5');
    console.log(userNumb);

  /* Genero un numero random (1-5) per il computer (uso una funzione) */
    
    /* Raccolgo i valori */
    let randomNumb;
    
    /* Funzione */
    function getRandNumbBetw2Numb (min, max) {
      
      randomNumb = Math.floor(Math.random() * max + min);
      
      return randomNumb;
    }

    /* Richiamo la funzione e assegno il valore */
    getRandNumbBetw2Numb (1, 5);
    //console.log(randomNumb);
    const pcNumb = randomNumb;
    console.log(pcNumb);    
    

  /* Sommo i due numeri */

  
  
  
  /* Stabilisco, con una funzione, se la somma dei due numeri è pari/dispari */

  /* Dichiaro chi ha vinto */