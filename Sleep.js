function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, millis);
    });
}
