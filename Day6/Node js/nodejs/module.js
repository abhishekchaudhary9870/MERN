const add=function (a ,b){
    console.log(a+b);

}
const sib=function (a ,b){
    console.log(a-b);

}
console.log("module .....")
const name='abhi';
module.exports = {
    fn1: add,
    fn2: sib,
    name,
};







