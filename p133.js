const { Observable } = require('rxjs');

const numbers$ = new Observable(observer => {
    console.log('create observable');
    try {
        observer.next(1);
    } catch (e) {
        observer.error('error observable')
    } finally {
        observer.complete()
    }
});

// 구독을 한다.
numbers$.subscribe(
    value => console.log(`첫번째 observable ${value}`),
    error => console.log(`첫번재 observable ${value}`),
    complete => console.log(`first finish`)
);
numbers$.subscribe(
    value => console.log(`두번째 observable ${value}`),
    error => console.log(`두번째 observable ${value}`),
    complete => console.log(`second finish`)
);
