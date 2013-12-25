
/**
 * class Test(String name, function func)
 */
function Test(name, func)
{
    this.name = name;
    this.func = func;

    this.lastScore = 0;
}
// function run(int maxTime):void
Test.prototype.run = function(maxTime)
{
    var start = Date.now();
    var tests = 0;
    var fails = 0;
    var time  = 0;

    do{
        try{
            this.func();
        }
        catch(e)
        {
            ++fails;
        }

        ++tests;

        time = Date.now() - start;
    }
    while(time < maxTime);

    this.lastScore = tests / time;

    console.log(' >>> %s: %d tests en %d ms (%s; %d fail; %s% réussi)', this.name, tests, time, ((time > tests)? ((time / tests * 100 | 0) / 100) +' ms/test' : ((this.lastScore * 100 | 0) / 100) +' tests/ms'), fails, ((tests - fails) / tests * 1000 | 0) / 10);
};

/**
 * class SpeedTest()
 */
function SpeedTest()
{
    this.tests = []; // :Array<Test>
}
// function add(String name, function func):@Chainable // Ajoute un test
SpeedTest.prototype.add = function(name, func)
{
    this.tests.push(new Test(name, func));

    return this;
};
// function go(int maxTime = 1500):void // Execute les tests
SpeedTest.prototype.go = function(maxTime)
{
    maxTime = maxTime || 1500;

    var best = this.tests[0];

    for(var i = 0, t; i < this.tests.length; ++i)
    {
        t = this.tests[i];

        t.run(maxTime);

        if(t.lastScore > best.lastScore)
        {
            best = t;
        }
    }

    if(this.tests.length > 1)
    {
        console.log('Best: '+ best.name +' avec '+ (best.lastScore * 1000 | 0) +' tests/s');
    }
};

// Exports
module.exports = SpeedTest;