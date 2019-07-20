const { Observable } = require('rxjs');

const number$ = new Observable(function subscribe(observer) {
    try {
        observer.next(1);
        observer.next(2);
        // 에러가 발생한다면?
        throw new Error("데이터 전달 도중 에러가 발생했음.");
        observer.next(3);
    } catch(e) {
        observer.error(e);
    }
});
number$.subscribe({
    next: v => console.log(v),
    error: e => console.log(e)
})
