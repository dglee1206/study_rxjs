const {interval } = require('rxjs');

const numbers$ = interval(1000);

numbers$.subscribe(value => console.log(`first ${value}`));
setTimeout(() => {
    numbers$.subscribe(value => console.log(`second ${value}`));
}, 2000);
