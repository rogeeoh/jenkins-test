const sayHello = () => {
    return 'hello';
};

const sayBye = () => {
    return 'bye';
};

const sum = (a, b) => a + b;

describe('Test2 Sample', () => {
    it('sayHello should return hello', (done) => {
        if (sayHello() === 'hello') {
            done();
        }
    });

    it('sayBye should return bye', (done) => {
        if (sayBye() === 'bye') {
            done();
        }
    });

    it('sum 3 + 5 should return 8', (done) => {
        if (sum(3, 5) === 8) {
            done();
        }
    });
});


describe('Test2 Sample2', () => {
    it('sayHello should return hello', (done) => {
        if (sayHello() === 'hello') {
            done();
        }
    });

    it('sayBye should return bye', (done) => {
        if (sayBye() === 'bye') {
            done();
        }
    });

    it('sum 4 + 6 should return 10', (done) => {
        if (sum(4, 6) === 10) {
            done();
        }
    });
});