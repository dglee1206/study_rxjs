const { from } = require('rxjs');

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x))

const map$ = from(new Map([[1,2], [2, 4], [4, 8]]));
map$.subscribe({
    next: v => console.log(v),
    error: e => console.log(e),
    complete: () => console.log('finish')
})

