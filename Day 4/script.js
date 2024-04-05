let a= new String("hello")
let b="hello"
if(a==b){
    console.log("yes");
}
else{
    console.log("no")
}
document.write(a);
const obj={
    name:'abhi',
    lname:'chaudhary',
};
const obj={
    name:'abhi',
    lname:'chaudhary',
};
const obj={
    "name":'abhi',
    "lname":"chaudhary"
};

document.write(JSON.stringify(obj));

const obj ={
    "name":"abhi",
    "lname":"chaudhary"
}
obj.name=20;
console.log(obj);

const arr =[1,2,34];
arr=[1,2,3]
console.log(arr)
const obj ={
    "name":"abhi",
    "lname":"chaudhary"
}

const arr =[1,2,34];
arr[1]=20
let x

// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));
// if(typeof(obj)){
function ifobj(x){
    // if(Array.isArray(arr)){
    //     console.log("yes")
    // }
    
    // else{
    //     console.log("neither array nor object")
    // }
     if(Array.isArray(x)){
        console.log("is not object")
    }
    else if(typeof(x)=="object"){
        console.log("is an object")
    }
    else{
        console.log("is not object")
    }


}

ifobj("name");
const arr =['name',2,true]
const obj={
    'name':'abhi',age:20,1:'else',
}

for(let i=0;i<2;i++){
    console.log(i);
}
for(let i=0;i<2;i++){
    console.log(obj[i]);
}
for(let i of arr){
    console.log(i)
}
for(let i of obj){
    console.log(obj[i])
}
for(let i in arr){
    console.log(i)
}
for(let i in obj){
    console.log(i)
}
for(let i of obj){
    console.log(obj[i])
}
for(let i of obj){
    console.log(obj[i])
}


console.log(window.innerHeight);
console.log(window.innerWidth);


console.log(window.document)
console.dir(window.document)
document.getElementById("cl").innerHTML=5+6;


const res=document.querySelectorAll('q')
console.log(res)
const res = document.getElementById("cl")
res.innerText="The Great Abhi"
console.log(res)
const res = document.getElementsByTagName("/div")
res[0].innerHTML="The Great Abhi"
res[1].innerHTML="The Great Abhi"
res[0].tagName="h1"
res[0].setAttribute('tagName','h1')
console.log(res)

const ne=document.createElement("h3")
console.log(ne)
ne.innerText="The Great Abhi"
document.body.appendChild(ne)/
const ne=document.createElement("h1")
console.log(ne)
ne.innerText="The Great Abhi"
document.body.appendChild(ne)
const firstdiv=document.getElementsByTagName("div")
firstdiv[0].appendChild(ne)
firstdiv[0].removeChild(ne)