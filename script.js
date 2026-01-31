console.log(" hello from vs code");
alert("hello from vs code");
'use strict';
var name="gagan";
var middleName=null;
var lastName="G R"
console.log(name);
console.log(middleName);
console.log(lastName);

var firstname="sachin";
firstname="tendulkar";
console.log(firstname);
console.log(typeof firstname);
firstname=34;
console.log(typeof firstname);
firstname=true;
console.log(typeof firstname);
console.debug("this is a debug message");
console.warn("this is a warning message");
console.error("this is an error message");
console.info("this is some info");
var student={
    name:"gagan",
    age:24,
    marks:89,
    area:"bangalore",
    state:"karnataka",
    country:"india",
    occupation:function(){
        return "student";
    }
}
console.log(student);
console.log("student name is "+student.name);
console.log("student occupation is "+student.occupation());

var person=new Object();
console.log(person);
person.name="gagan";
person.age=24;
person.city="bangalore";
console.log(person);
console.log("person name is "+person.name);

console.log(Object.keys(student));
console.log(Object.values(student));

console.log("ba"+100/"gagan"+"a");


//Strings and its methods
var str="  Hello World  ";
console.log(str.length);
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(2,7));
console.log(str.replace("world","JavaScript"));//on;y first occurrence will be replaced
console.log(str.includes("Hello"));
console.log(str.startsWith("  He"));
console.log(str.endsWith("ld  "));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));
console.log(str.charAt(4));
console.log(str.split(" "));

var str='It\'s a computer';
var str2="I am \"Gagan\"";
console.log(str==str2);

var str3="Hello";
var str4=new String("Hello");

console.log(str3==str4);//NORMAL COMPARISON TRUE
console.log(str3===str4);//STRICT COMPARISON FALSE

console.log(typeof str3);
console.log(typeof str4);

console.log(str.substring(1,4));
console.log(str);
console.log(str.slice(-5));

console.log(str.substr(2,5));//includes start index  and upto last index
console.log(str.substring(2,5));//include start index but exclude last index

//Arrays
var arr=[10,20,30,40,50];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
arr[2]=100;
console.log(arr);
arr.push(60);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5);///wheen need to add element at the beginning
console.log(arr);
console.log(arr.indexOf(40));
console.log(arr.includes(100));
console.log(arr.slice(1,4));
console.log(arr.splice(2,2));//removes elements from index 2 and removes 2 elements
console.log(arr);
arr.splice(2,0,25,30);//from index 2 removes 0 elements and adds 25,30
console.log(arr);
var newArr=arr.concat([60,70,80]);
console.log(newArr);
console.log(arr[3]);
var names=["gagan","ravi","sachin","rahul"];
console.log(names.indexOf("sachin"));
names.splice(2,1,"tendulkar");  //from index 2 removes 1 element and adds tendulkar
console.log(names);
console.log(names.join(",,"));
console.log(arr.reverse());
console.log(arr);
console.log("jjl")
///need to 20 remove 2nd element in arr
arr.splice(2,1);
console.log(arr);
//Array or Object destructuring
arr3=[100,200,300,400,500];
var [a,b,c,d,e]=arr3;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

var student1={
    name:"gagan",
    age:24,
    city:"bangalore"
}
var {name,age,city}=student1;
console.log(name);
console.log(age);
console.log(city);

//using rest params
var[num1,num2,...rest]=[10,20,30,40,50,60,70];
console.log(num1);
console.log(num2);
console.log(rest);

var dog="raja";
switch(dog){
        case "raja":
        console.log("dog is raja");
        break;
        default:
        console.log("unknown dog");
        break;
}

//ternary operator
var age=24;
var isAdult=(age>=18)?"yes":"no";
console.log(isAdult);

//loops
for(var i=1;i<=5;i++){
    console.log("iteration "+i);
}
var count=0;
while(count<5){
    console.log("while loop iteration "+count);
    count++;
}

var counter=0;
do{
    console.log("do while loop iteration "+counter);
    counter++;
}
while(counter<5);

var student5={
    name:"gagan",
    age:24,
    city:"bangalore",
    country:"india",
    occupation:"student",
    language:"javascript"
}
console.log(student5["age"]);
for(var key in student5){
    console.log(key+": "+student5[key]);
}

//for of loop
var colors=["red","green","blue","yellow"];

for(var color of colors){
    console.log(color);
}


//functions
function sayHello(name){
    return "Hello "+name;
}
console.log(sayHello("gagan"));

function add(a,b=0){
    return a+b;
}
console.log(add(10));

function multiply(...args){
    var result=1;
    for (var num of args){
        result*=num;
    }
    return result;
}

console.log(multiply(2,3,4,5,6,7,8))

//anonomous function - function without name

var greet=function(name){
    return "Hi "+name;
}

var cube=function(n){
    return n*n*n;
}
console.log(cube(3));

//arrow functions
/*
()=>{
    //function body
}
*/
//added to es6 ,, mainly used in callback function

var square=(n)=>{
    return n*n;
}
console.log(square(5));

//passing function in another function as parameter eg foreach
var arr6=[10,20,30,40,50,60];

arr6.forEach(function(element,index){
    console.log(element+" "+index);
})
arr6.forEach((element)=>{
    console.log(element);
})

//map  = it will be called for all element in the array and create a new array,it will not modify the original array
//when to use map= when we want to create a new array by performing some operation on each element of the original array
var resArray=arr6.map((element)=>{
    return element*2;
})

console.log(resArray);


//callback function= functions that get called by another functions to which it is passed
//when we are not returning any thing from the callback function  no need of use map



//callback function is a function passed to another function as a argument , which is then invoked by outer/enclosing function to complete  some task

//////////////////////////////////////////////////////////////////////
//Radios method - to reduce  the array to one single value by applying a function on each element of the array, it will accept callback function as parameters
arr71=[1,2,3,4,5,6,7,8,9,10];
var callback=(prev,current)=>{
    console.log("prev: "+prev+" current: "+current);
    return prev+current;
}
var res=arr71.reduce(callback,10);//10 is initial value for prev
console.log("reduced value: "+res);
/*synntax:
    reduce(callbackfn,initialValue)
    */


//sort method

