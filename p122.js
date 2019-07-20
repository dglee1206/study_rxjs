const { from } = require('rxjs')
const success$ = from(Promise.resolve(100));
success$.subscribe({
    next: v => console.log(v),
    error: e => console.log(e),
    complete: () => console.log('finish')
});

