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
## 4. Show an example ofSafegrounding function parameters? ##
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
## 8. Count Total number of zeros from 1 up to 50 ##
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
## 15. What is an anonymous function? Where do we use it? Why do we need it? ##
## 16. List the differences between named function and assigning functions to variable with examples ##