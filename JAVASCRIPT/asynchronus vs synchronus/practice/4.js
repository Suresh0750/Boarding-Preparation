
// * generator functioons to generate prime number n


function* isPrime() {
    for (let i = 2; i < Infinity; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            yield i;
        }
    }
}

const prime = isPrime();

setInterval(() => {
    console.log(prime.next().value);
}, 1000);
