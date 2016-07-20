//every function while executing has its own execution context

/*
 * 4 rules for binding this, all depends on the "call site"
   where that function is called, how is it called

   1.
   2.
   3. implicit binding -> when there is a function ref in an object the this keyword points to the object containing the ref
   4. default binding  -> if (strictMode) return undefined; else return global object;   (the strict mode is relative to the function contents)

   global object := in browser the window, in node there is a global object etc..
*/


function foo(){
  console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo }; //ref to foo, 3rd rule o2 will be this
var o3 = { bar: "bar3", foo: foo }; //same here

foo();
o2.foo();
o3.foo();
