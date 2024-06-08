<<<<<<< HEAD
var message='Hello World';
var age=18;
age='Done';
console.log(message);
console.log(age);






function env(){
    for(var i=0;i<5;i++){
        console.log('--',i);
    }
    onsole.log(i);
}

env();



const message ='Hello';


console.log(message);


let userAge = '20';
userAge='21';
console.log(typeof(userAge));

let arr=['a','b','c','d'];
console.log(arr);

let str = "12";
let age = 2;
let ans= ;
console.log(ans);
const str = 'JAAT';
const usrName='My name is ${str};
console,log(usrName)


function print(x='nothing'){
    console.log(x);
}
const s="hello";
print();





function sum(a,b){
    if(a&&b){
    console.log(a+b);
    }
    else if(a){
        console.log(a);
    }
    else{
        console.log(0);
    }
}
 sum();
function sum(a=0,b=0){
    console.log(a+b);
}
 sum();
 sum(2);
 sum(2,3);

print();
a();
b();
function declaration

function print(){
    console.log('--');
}

//function assignment  (named)
const a = function print(){
    console.log('--');
}  

//function assignment  (anonymous)
const b = function (){
    console.log('--');
}  
// arrow function assignment  
let c = () =>{
    console.log('--');
}  

print();
a();
b();
c();

let a=2;
switch(a){
    case 1:{
console.log("one");
break;
    }
    case 2:{
        console.log("two");
        break;
    }
    case 3:{
        console.log("three");
        break;
    }
    default:{
        console.log('not 1,2,3');
    }
}


const obj = new Object();
obj=[1]='twelve';
obj=['name']='twelve';
obj=[1]='twelve';
console.log(obj);

const obj = {};
obj=[1]='twelve';
obj=['name']='twelve';
obj=[1]='twelve';
console.log(obj);

const obj = {
    1:'twelve',
'name':'twelve',
1:'twelve'
};

console.log(obj);

const obj = {
    1:'one',
    'lastname':'chaudhary',
    'fname':'abhi',
    'age':20,
    'address':'delhi',
};
const fullname= obj.fname+' '+obj.lastname;
const fullname1=`${obj.fname} ${obj.lastname}`;
console.log(fullname);
console.log(fullname1);


const obj = {
   
    'lastname':'chaudhary',
    'fname':'abhi',
    'age':20,
    'address':'delhi',
};
const x= prompt('please tell the property to know');
=======
var message='Hello World';
var age=18;
age='Done';
console.log(message);
console.log(age);






function env(){
    for(var i=0;i<5;i++){
        console.log('--',i);
    }
    onsole.log(i);
}

env();



const message ='Hello';


console.log(message);


let userAge = '20';
userAge='21';
console.log(typeof(userAge));

let arr=['a','b','c','d'];
console.log(arr);

let str = "12";
let age = 2;
let ans= ;
console.log(ans);
const str = 'JAAT';
const usrName='My name is ${str};
console,log(usrName)


function print(x='nothing'){
    console.log(x);
}
const s="hello";
print();





function sum(a,b){
    if(a&&b){
    console.log(a+b);
    }
    else if(a){
        console.log(a);
    }
    else{
        console.log(0);
    }
}
 sum();
function sum(a=0,b=0){
    console.log(a+b);
}
 sum();
 sum(2);
 sum(2,3);

print();
a();
b();
function declaration

function print(){
    console.log('--');
}

//function assignment  (named)
const a = function print(){
    console.log('--');
}  

//function assignment  (anonymous)
const b = function (){
    console.log('--');
}  
// arrow function assignment  
let c = () =>{
    console.log('--');
}  

print();
a();
b();
c();

let a=2;
switch(a){
    case 1:{
console.log("one");
break;
    }
    case 2:{
        console.log("two");
        break;
    }
    case 3:{
        console.log("three");
        break;
    }
    default:{
        console.log('not 1,2,3');
    }
}


const obj = new Object();
obj=[1]='twelve';
obj=['name']='twelve';
obj=[1]='twelve';
console.log(obj);

const obj = {};
obj=[1]='twelve';
obj=['name']='twelve';
obj=[1]='twelve';
console.log(obj);

const obj = {
    1:'twelve',
'name':'twelve',
1:'twelve'
};

console.log(obj);

const obj = {
    1:'one',
    'lastname':'chaudhary',
    'fname':'abhi',
    'age':20,
    'address':'delhi',
};
const fullname= obj.fname+' '+obj.lastname;
const fullname1=`${obj.fname} ${obj.lastname}`;
console.log(fullname);
console.log(fullname1);


const obj = {
   
    'lastname':'chaudhary',
    'fname':'abhi',
    'age':20,
    'address':'delhi',
};
const x= prompt('please tell the property to know');
>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
console.log(obj[x]);