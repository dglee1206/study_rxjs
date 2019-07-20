const { fromEvent } = require('rxjs')
const click$ = fromEvent(document, 'click');
const subscription = click$.subscribe({
    next: v => console.log("click 이벤트 발생"),
    error: e => console.log(e),
    complete: () => console.log("finish")
});
