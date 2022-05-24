# Javascript Evaluation -2 #
## 1. Display prime numbers 1 to 200? ##
## Program ##
```Javascript
function primeNo(){
for (let i = 1; i <= 200; i++) {
    let a = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            a = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && a == 0) {
        console.log(i);
    }
}}primeNo()
```
## Output ##
```Javascript
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113
127
131
137
139
149
151
157
163
167
173
179
181
191
193
197
199
```

## 2. From two sorted arrays, how would you find the common numbers? ##
## Program ##
```Javascript
const arr1=[1,2,3,4,5,6,7];
const arr2=[3,4,6,8,9];
function common(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                console.log(arr1[i]);
            }
        }
    }
}common(arr1,arr2);
```
## Output ##
```Javascript
3
4
6
```
## 3. Explain about function Anatomy, Anonymous function and Assigning function to avariable with an example? ##
## Function Anatomy ##
* The function definition consists of the function keyword followed by its name parenthesis containing a list of parameter names (a,b,c) and the function body enclosed in brackets.
* The return keyword is optional. But function will return anyway once all statements in its body are done executing, even if return keyword is not specified.
## Example ##
```Javascript
function fun(a,b,c){

}
```
## Anonymous Functions ##
* Nameless or anonymous functions can be defined by using the same syntax but skipping the function name.
## Example ##
```Javascript
setTimeout(function(){
    console.log("hello how are you");
},5000);
```
## Assigning Functions To Variables ##
* Anonymous functions can be assigned to a variable, making them named functions again.
## Example ##
```Javascript 
let print=function(){
    console.log("hello how are you");
}
let clicked=function(){
    console.log("document was clicked");
}
print();
clicked();
setTimeout(print,3000);
```

## 4. Show an example ofSafegrounding function parameters? ##
## Example
```Javascript
function safeguarding(fun) {
  if (typeof fun === "function") {
    fun();
  } else console.log("fun is not a function");
}

let a = 10;
safeguarding(arguments);
safeguarding(a);

function arguments() {
  console.log("I am Kathish");
}
```
## Output
```Javascript
I am Kathish
fun is not a function
```

## 5. Explain `this` keyword with an example? ##
* In JavaScript, the this keyword refers to an object.

* Which object depends on how this is being invoked (used or called).

* The this keyword refers to different objects depending on how it is used:

    * In an object method, this refers to the object.
    * Alone, this refers to the global object.
    * In a function, this refers to the global object.
    * In a function, in strict mode, this is undefined.
    * In an event, this refers to the element that received the event.
    * Methods like call(), apply(), and bind() can refer this to any object.
## Example ##
```Javascript
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());
  ```
## Output ##
```Javascript
John Doe
```

## 6. How ‘this’ inside the function and class? ##
## "this" inside the class ##
* This keyword is used inside of a class and refers to the current instance.
## Example ##
```Javascript
class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
    dialogue() {
      console.log(`I am ${this.heroName}`)
    }
  }
  const batman = new Hero("Batman");
  batman.dialogue();
  ```
  ## Output ##
  ```Javascript
  I am Batman
  ```
## "this" inside the function ##
* The value of this inside a function is usually defined by the function's call.
* JavaScript strict mode does not allow default binding.
* So, when used in a function, in strict mode, this is undefined.
## Example ##
```Javascript
function Hero(heroName, realName) {
    this.realName = realName;
    this.heroName = heroName;
  }
  const superman = new Hero("Superman", "Clark Kent");
console.log(superman);
```
## Output ##
```Javascript
Hero { realName: 'Clark Kent', heroName: 'Superman' }
```
## 7. Difference between map, reduce and filter methods? With an example ##
## Map
* The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
## Example
```Javascript
let num=[3,4,6,7,8,9,3];
let result=num.map(value=>value=value+2);
console.log(result);
console.log(num);
```
## Filter
* The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
## Example
```Javascript
let num=[6,13,44,4,7,8,87];
let a=value=>value<10;
let filtered=num.filter(a);
console.log(filtered);
console.log(num);
```
## Reduce
* The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
## Example
```Javascript
const marks=[45,67,87,56,72];
const sum=marks.reduce((a,e)=>a+e,0);
console.log(sum);
```

## 8. Count Total number of zeros from 1 up to 50 ##
## Program ##
```Javascript
function countZero(start, end) {
  let count = 0;
  for (i = start; i <= end; i++) {
    let numericString = i.toString();
    let arr = numericString.split("");
    for (j = 0; j < arr.length; j++) {
      if (arr[j] == "0") {
        count = count + 1;
      }
    }
  }
  console.log(`Total number of Zero between ${start} to ${end} is ${count}`);
}
countZero(1, 50);
```
## Output ##
```Javascript
Total number of Zero between 1 to 50 is 5
```
## 9. The following array of numbers show the missing number? ([1,2,3,5,6]) ##
## Program ##
```Javascript
var a=[1,2,3,5,6];
count=6;
//count = a[a.length-1];
//console.log(count);
//var missing = new Array();
var missing=[];
for (var i = 1; i <= count; i++) {
if (a.indexOf(i) == -1) {
    missing.push(i);
}
}
console.log(missing);
```
## Output ##
```Javascript
[ 4 ]
```

## 10. Write a program for calculating age using Date of birth? (1990) ##
## Program ##
```Javascript
function getAge(birthYear){
	var currentDate = new Date();
    //console.log(currentDate);
    var currentYear = currentDate.getFullYear();
    //console.log(currentYear);
    age = currentYear - birthYear;
    return age;
}getAge(1990);
console.log(age);
```
## Output ##
```Javascript
32
```

## 11. In the Javascript function, what are the differences between call by value and reference? ##
## Call by value ##
* The original variable is not modified on changes in other variables.
* Actual and copied variables will be created in different memory locations.
* On passing variables in a function, any changes made in the passed variable will not affect the original one.

## Example ##
```Javascript
var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);
```
## Output ##
```Javascript
3
5
```
## Call by reference ##
* The original variable gets modified on changes in other variables.
* Actual and copied variables are created in the same memory location.
* On passing variables in a function, any changes made in the passed parameter will update the original variable’s reference too.

## Example ##
```Javascript
 var c = { greeting : 'Welcome' };
    var d;
    d = c;
    c.greeting = 'Welcome to geeksforgeeks';
    console.log(c);
    console.log(d);
```
## Output ##
```Javascript
{ greeting: 'Welcome to geeksforgeeks' }
{ greeting: 'Welcome to geeksforgeeks' }
```

## 12. What is Arity in Javascript? Explain with a real time example. ##
## Arity ##
* Arity is the number of arguments a function takes.
You can access function’s arity via Function.length property:
## Example ##
```Javascript
function f(a,b,c){

}
let arity = f.length;
console.log(arity);
```
## Output ##
```Javascript
3
```
## 13. What is Currying in Javascript? Explain with a real time example. ##
## Currying ##
* This also means a function can return
another function. In the previous section we looked at the closure pattern.
*  Currying is a pattern that immediately evaluates and returns another function expression.
A curried function can be constructed by chaining closures by defining and imme-diately returning all inner functions at the same time.
## Example ##
```Javascript
let planets=function(a){
    return function(b){
        return "Favourite planets are " + a + " and " + b;
    };
};
let favouritePlanets=planets("Jupiter");
console.log(favouritePlanets("Earth"));
console.log(favouritePlanets("saturn"));
console.log(favouritePlanets("mars"));
```
## Output ##
```Javascript
Favourite planets are Jupiter and Earth
Favourite planets are Jupiter and saturn
Favourite planets are Jupiter and mars
```
## 14. What is ES6? ##
## Javascript ES6
* JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.

* ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.

## JavaScript let
* JavaScript let is used to declare variables. Previously, variables were declared using the var keyword.

* To learn more about the difference between let and var, visit JavaScript let vs var.

* The variables declared using let are block-scoped. This means they are only accessible within a particular block.
## Example
```Javascript
// variable declared using let
let name = 'Sara';
{
    // can be accessed only inside
    let name = 'Peter';

    console.log(name);
}
console.log(name); 
``` 
## Output
```Javascript
Peter
Sara
```
## JavaScript const
* The const statement is used to declare constants in JavaScript.
* Once declared, you cannot change the value of a const variable.
## Example
```Javascript
// name declared with const cannot be changed
const name = 'Sara';
```
## JavaScript Arrow Function
* In the ES6 version, you can use arrow functions to create function expressions.
## Example
```Javascript
// function expression
let x = function(x, y) {
    return x * y;
 }
// function expression using arrow function
let x = (x, y) => x * y; 
```
## JavaScript Classes
* JavaScript class is used to create an object. Class is similar to a constructor function.
* Keyword class is used to create a class. The properties are assigned in a constructor function.
## Example
```Javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person('John');

console.log(person1.name); 
```
## Default Parameter Values
* In the ES6 version, you can pass default values in the function parameters.
## Example
```Javascript
function sum(x, y = 5) {

    // take sum
    // the value of y is 5 if not passed
    console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20
```
## JavaScript Template Literals
* The template literal has made it easier to include variables inside a string. 
```Javascript
// const first_name = "Jack";
// const last_name = "Sparrow";

// console.log('Hello ' + first_name + ' ' + last_name);


//literals
const first_name = "Jack";
const last_name = "Sparrow";

console.log(`Hello ${first_name} ${last_name}`);
```
## JavaScript Destructuring
* The destructuring syntax makes it easier to assign values to a new variable. 
## Example
```Javascript
// before you would do something like this
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name);
console.log(age); 
console.log(gender);
//destructuring
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let { name, age, gender } = person;

console.log(name);
console.log(age); 
console.log(gender); 
```
## JavaScript import and export
* You could export a function or a program and use it in another program by importing it. This helps to make reusable components.

## 15. What is an anonymous function? Where do we use it? Why do we need it? ##
## Anonymous Functions ##
* Nameless or anonymous functions can be defined by using the same syntax but skipping the function name.
## Example ##
```Javascript
setTimeout(function(){
    console.log("hello how are you");
},5000);
```
## Uses: ##
* Anonymous function used as a setTimeout event callback.
* Anonymous function used to intercept a mouse click event.

## 16. List the differences between named function and assigning functions to variable with examples ##
## Named Function ##
* In JavaScript, named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function.
```Javascript
function func(){
}
```
## Assigning Functions To Variables ##
* Anonymous functions can be assigned to a variable, making them named functions again.
## Example ##
```Javascript 
let print=function(){
    console.log("hello how are you");
}print();
```