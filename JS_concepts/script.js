// console.log("JS concepts");
// function debouncedGetProducts(){

// }

// function useDebounce(fn, time) {
//     let timeoutID;


//     return function(...args){
//        clearTimeout(timeoutID);
//        timeoutID = setTimeout(()=>{fn(...args)}, time); 
//     }
//     // setTimeout(fn, time);
    
// }

// async function getProducts(text) {
//     const res = await fetch(`https://dummyjson.com/products/search?q=${text}`)   
//     const data = await res.json();
//     console.log(data);
// }


// const debouncedGetProducts = useDebounce(getProducts, 600)


// const input = document.getElementById('search-box');
// input.addEventListener('keyup',(e)=>{
//     debouncedGetProducts(e.target.value);
// });

// implement a function to add numbers//
// function add(...arr){
// const res = arr.reduce((acc, item)=> acc+item, 0);
// console.log(res)
// }

const ajay  = {
    id:'1',
    name:'Ajay v',
    courses:['c++','java'],
}
const ray = {...ajay};
ray.name = 'roy';
ray.courses[0] = 'java';

console.log(ajay)
console.log(ray)








