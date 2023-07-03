const isUgly = (number) => {
    if (number <= 0) {
        return false;
    }

    const primes = [2, 3, 5];
    for (const prime of primes) {
        while (number % prime === 0) {
            number /= prime;
        }
    }

    return number === 1;
};