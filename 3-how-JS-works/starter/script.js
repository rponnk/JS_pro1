///////////////////////////////////////
// Lecture: Hoisting

// function calcAge(year) {
//     return new Date().getFullYear() - year;
// }


//lexical - function written in function
let a = `Hello World`;
first();

function first() {
    let b = `Hi`;
    second();
    function second() {
        let c = 'Hey';
        console.log(`A) ${a} B) ${b} C) ${c}`);
    }
}
//global function only has access to a in global scope
function third() {
    let d = 'John';
    console.log(a + b + c + d);
}


//this
function calcAge(year) {
    return new Date().getFullYear() - year;
}

console.log(calcAge(1991));

let john = {
    name: 'John',
    yob: 1985,
    calculateAge: function() {
        console.log(this);
        console.log(new Date().getFullYear() - this.yob);

        // function innerFunction() {
        //     console.log(this);
        //     }
        //     innerFunction();
    }
}

john.calculateAge();

//method borrowing
let mike = {
    name: 'Mike',
    yob: 1984
};

mike.calculateAge  = john.calculateAge;
mike.calculateAge();









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









