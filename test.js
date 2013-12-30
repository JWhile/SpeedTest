
var SpeedTest = require('./SpeedTest');

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
