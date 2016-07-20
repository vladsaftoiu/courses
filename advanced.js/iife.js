//IIFE pattern(slide 23) := Immediately Invoked Function Expression
var foo = "foo";

(function (){
    var foo = "foo2";
    console.log(foo);
})(); //--> IIFE

console.log(foo);

//everything inside an IIFE is "private"
//we can use this pattern to make modules and expose only the props we really want public
//by passing window variable to the function expression, like this 

(function module1(global){
    
    function a() {return "a";};
    function b() {return "b";};
    
    global.publicfunc = function result() { return a() + b();}
    
})(window);
