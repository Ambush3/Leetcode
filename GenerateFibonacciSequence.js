var fibGenerator = function* (i) {
    let a = 0;
    let b = 1;

    yield a;
    yield b;

    while (true) {
        const next = a + b;
        yield next
        a = b
        b = next
    };
};
