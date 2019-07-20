// const promise = new Promise((resolve, reject) => {
//     try {
//         let value = 0;
//         setInterval(() => {
//             console.log(`is going ${value}`);
//             resolve(value++);
//         }, 1000);
//     } catch (e) {
//         reject('error promise')
//     }
// });
//
// promise.then(
//     value => console.log(`promise value ${value}`)
// );

const { Observable } = require('rxjs');

const obj$ = new Observable(observer => {
    let id;
    try {
        let value = 0;
        id = setInterval(() => {
            console.log(`is going ${value}`);
            observer.next(value++);
        }, 1000);
    } catch (e) {
        observer.error(e)
    }

    // unsubscribe 될 때 호출되는 함수를 반환 teardown
    return () => {
        clearInterval(id);
        console.log('cancelled')
    }
})

const subscription = obj$.subscribe(
    value => console.log(`observable value ${value}`)
);

// 3초 후에 observable 구독 취소
setTimeout(() => subscription.unsubscribe(), 3000);
