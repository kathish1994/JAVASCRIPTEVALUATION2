function primeNo(){
for (let i = 1; i <= 200; i++) {
    let a = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            a = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && a == 0) {
        console.log(i);
    }
}}primeNo()