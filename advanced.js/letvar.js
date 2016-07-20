//EcmaScript 6+
//block scope, let keyword (slide 26)
// let will hijack the declaration of a variable to the current block of code 

function foo(){
    //var declares the a variable and attaches it to the "closest" scope, in thi case, the function foo scope
    for (var i = 0; i<10; i++){
        console.log(i);
    }
    // "i" is still accessible outside the for loop   
    i++;
    console.log(i);
}

function bar(){
    //let attaches the "i" only to the for block of code
    for (let i = 0; i<10; i++){
        console.log(i);
    }
    i++; //reference error, i not defined
    console.log(i);
}

function baz(start){
    for (start; start<10;start++){  //will start from arg
        console.log(start);
    }
    
    for (let start=2;start<10; start++){    //will always start from 2
        console.log(start*2);
    }
}
