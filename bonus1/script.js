// -stampare nella console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // 1. definire se è multiplo di 3 o 5 o entrambi
    let fizzOrBuzz;
    if (i % 5 === 0 && i % 3 === 0) {
        fizzOrBuzz = 'fizzbuzz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'buzz';
    } else if ( i % 3 === 0) {
        fizzOrBuzz = 'fizz';
    } else {
        fizzOrBuzz = `${i}`;
    }

    // 2. stampare in console
    console.log(fizzOrBuzz);
    
    // 3.aggiungere elementi in dom con i

    const rowWrapper = document.querySelector('.row');
    rowWrapper.innerHTML += `<div class= "box ${fizzOrBuzz}">${fizzOrBuzz}</div>`;
}


