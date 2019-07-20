const { Observable } = require('rxjs');
const number$ = new Observable(observer => {
    try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    } catch (e) {
        observer.error(e);
    }
});
number$.subscribe({
    next: v => console.log(v),
    error: e => console.log(e),
    complete : () => console.log("데이터 전달 완료")
})
