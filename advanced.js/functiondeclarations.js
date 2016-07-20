// FUCTION DECLARATION, EXPRESSIONS and BLOCK SCOPE

var foo = function bar() {      // function expression; also named function (not anonymous)
    var foo = "baz";            // scope(bar).foo
    
    function baz(foo){
        foo = bar;              // legal, named funcion bar is visible in itself 
        foo;    
    }
    
    baz();
};

foo();
bar();

/*
 three negatives of using anonymous functions in anonymous expressions :
    1. no way to refer to ourselves  (this is not a reference to yourself)
    2. hard to debug because you look at the stack and see a lot of func calls with no name
    3. code expressiveness: with named functions you can explain better what you are going to do inside that block of code
*/