const sayHello = () => {
    return 'hello';
};

describe('Test!!', () => {
    it('say Hello should return hello', (done) => {
        if (sayHello() === 'hello') {
            done();
        }
    });

    // it('say Hello should return hello', (done) => {
    //     if (sayHello() === 'bye') {
    //         done();
    //     }
    // });
});
