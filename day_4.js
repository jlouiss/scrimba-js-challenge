function sumAllPrimes(num) {
    primeNumbers = [2];

    for (let n = 3; n <= num; n++) {
        const isPrime = primeNumbers.every(prime => n % prime !== 0);
        if (isPrime) {
            primeNumbers.push(n);
        }
    }

    return primeNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
