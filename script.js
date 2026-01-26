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