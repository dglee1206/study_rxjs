const { from } = require('rxjs');
const fetch = require('node-fetch')

const request$ = from (
    fetch("https://api.github.com/search/users?q=sculove")
        .then(res => res.json())
        // .then(data => console.log(data))
);

request$.subscribe(json => {
    console.log(`서버로부터 전달 받은 json 값 ${JSON.stringify(json)}`);
})
