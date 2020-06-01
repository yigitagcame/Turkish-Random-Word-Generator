# Random Turkish Word Generator
Turkish language institution web site content based random word generator.

```js
let rwg = require('./rwg');

rwg.random((err, words) => {
    console.log(words);  // Returns 10 random words as array
     /*
    ['tabi',
    'nüfuz',
    'eğer',
    'indirgemek',
    'hâl',
    'doyulmayan',
    'mahiyet',
    'bilhassa',
    'mütehassıs',
    'iltica' ]
  */
    console.log(err);
    
});



```