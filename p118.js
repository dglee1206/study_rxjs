const { range } = require('rxjs');

const numbers = range(1, 10);
numbers.subscribe(x => console.log(x));
