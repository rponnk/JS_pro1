//function constructor

let john = {
    name: 'John',
    yob: 1991,
    job: 'teacher'
};

//function constructor
let Person = function(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(`${this.name} is ${new Date().getFullYear() - this.yob}`);
}

Person.prototype.sayHi = function() {
    console.log(`Hello ${this.name}`);
}
//instantiation
let jane = new Person('Jane', 1988, 'teacher');
jane.calcAge();

let mark = new Person('Mark', 1958, 'teacher');
mark.calcAge();


//inheritance with prototype

Person.prototype.lastname = 'Doe';

console.log(`${mark.name} ${mark.lastname}`);
console.log(`${jane.name} ${jane.lastname}`);


//Passing functions as arguments
let years = [2010, 1995, 1979, 1987];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(el) {
    if(new Date().getFullYear() - el >= 21) {
        return `you are of drinking age`;
    } else {
        return `nope not happening`;
    }
}

function calculateAge(age) {
    return new Date().getFullYear() - age -1;
}


let page = document.getElementById('printOut');

console.log(arrayCalc(years, calculateAge));
console.log(arrayCalc(years, isFullAge));

//functions returning functions

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(`${name} can you please explain what UX design is`);
        } 
    } else if(job === 'teacher') {
            return function(name) {
                return function(age) {
                    console.log(`${name} ${age}`);
                }
            }
    } else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`);
        }
    }
}

let teacherQuestion =
interviewQuestion('teacher')('chunky')(12); 


//iife
(function(name){
    console.log(name);
})('ollie');

function questions(num) {
    if (num === 0) {
        return function (name) {
           name = prompt(`what is your name?`);
           if(name !== null) {
                document.getElementById('printOut').innerText = `your name is ${name}`;
           } 
        }
    } else if(num === 1) {
        return function(age) {
            age = prompt(`how old are you?`);
            if(age !== null) {
                document.getElementById('printOut').innerText = `your age is ${age}`;
            } 
        }
    } else {
        console.log('none are working');
    }
}

let ask = questions(Math.floor(Math.random() * 2));
ask();