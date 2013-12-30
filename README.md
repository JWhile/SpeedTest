# SpeedTest

Simple benchmark pour nodejs.

### Get it!

_..._

### Exemple

```js
var SpeedTest = require('SpeedTest');

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
