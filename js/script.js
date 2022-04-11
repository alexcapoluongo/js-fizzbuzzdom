// -stampare nella console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // 1. definire se è multiplo di 3 o 5
    let fizzOrBuzz;
    if (i % 5 === 0 && i % 3 === 0) {
        fizzOrBuzz = 'fizzbuzz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'buzz';
    } else if ( i % 3 === 0) {
        fizzOrBuzz = 'fizz';
    }
    console.log(i, fizzOrBuzz);
}

// multipli di 3 'fizz' multipli di 5 'buzz'