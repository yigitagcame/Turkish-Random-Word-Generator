# Random Turkish Word Generator
Turkish language institution web site content based random word generator.

```js
let rwg = require('./rwg');

rwg.random((err, words) => {
    console.log(words);
    console.log(err);
});

```