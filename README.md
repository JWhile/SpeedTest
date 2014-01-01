# SpeedTest

Simple benchmark pour Nodejs.

### Get it!

SpeedTest est dans [npm](https://npmjs.org/package/speedtest).
```
$ npm install speedtest
```

```js
var SpeedTest = require('speedtest');
```

### Exemple

```js
new SpeedTest()
    .add('Test #1', function()
    {
        return Math.floor(2.225475);
    })
    .add('Test #2', function()
    {
        return 2.225475 | 0;
    })
    .go(1500);
```

Affiche:

```text
 >>> Test #1: 11551923 tests en 1500 ms (7701.28 tests/ms; 0 fail; 100% réussi)
 >>> Test #2: 11689931 tests en 1500 ms (7793.28 tests/ms; 0 fail; 100% réussi)
Best: Test #2 avec 7793287 tests/s
```

### Références

##### class SpeedTest

###### Methodes

* `.add(nom, function)` _@Chainable_ Ajoute un test.
* `.go(temps)` _(void)_ Lance les tests. (`temps` est le temps d'execution des tests en ms, par défaut `1500`)

### License

> The MIT License (MIT)
> 
> Copyright (c) 2013 juloo
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
