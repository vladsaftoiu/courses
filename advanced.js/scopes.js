//LOCAL SCOPES and GLOBAL SCOPE

var foo = "bar";        // scope(global).foo

function bar(){         // function declaration    
    var foo = "baz";    // scope(bar).foo
    
    function baz(foo) { // scope(baz).foo named parameter is implicit declaration
        foo = "bam";
        bam = "yay";    // when in non-strict mode we look for bam in scope(baz) then in scope(bar) then in scope(global) and global creates a reference for us
    }
    baz();
}

bar();  //executes bar function
foo;    // := "bar"
bam;    // := "yay"
baz();  // reference error (since baz is a fuction scope(global) will not create a reference for us even in non strict mode