<<<<<<< HEAD
// setTimeout(()=>{console.log('timeout..')
// },20000)
// console.log('start')
// setTimeout(()=>{console.log('timeout..2')
// },20000)
// console.log('intermediate')
// console.log('end')
// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[ thisArg])
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens); // [2, 4]
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// // why we need promises
// console.log(sum); // 10
// function createOrder(x,fn){
//     console.log(x)
//     setTimeout(()=>{fn('abhi123')},1000)
// }

// function makePayment(orderID){
//     //Logic
//     console.log(orderID)
// }
// createOrder('soap',makePayment)

setTimeout(function abc(){
    console.log('i am one')
},0);
const pr=new Promise((res,rej)=>{
    
    // setTimeout(()=>{resolve("Done-123");},10000);
    setTimeout(()=>{res('done')},0);
});
pr.then(function b(res){
    console.log("promise fullfilled:",res);
});
setTimeout(function xyz(){
    console.log('i am two')
},0);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });


// console.log(pr)
=======
// setTimeout(()=>{console.log('timeout..')
// },20000)
// console.log('start')
// setTimeout(()=>{console.log('timeout..2')
// },20000)
// console.log('intermediate')
// console.log('end')
// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[ thisArg])
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens); // [2, 4]
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// // why we need promises
// console.log(sum); // 10
// function createOrder(x,fn){
//     console.log(x)
//     setTimeout(()=>{fn('abhi123')},1000)
// }

// function makePayment(orderID){
//     //Logic
//     console.log(orderID)
// }
// createOrder('soap',makePayment)

setTimeout(function abc(){
    console.log('i am one')
},0);
const pr=new Promise((res,rej)=>{
    
    // setTimeout(()=>{resolve("Done-123");},10000);
    setTimeout(()=>{res('done')},0);
});
pr.then(function b(res){
    console.log("promise fullfilled:",res);
});
setTimeout(function xyz(){
    console.log('i am two')
},0);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });


// console.log(pr)
>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
// setTimeout(()=>{})