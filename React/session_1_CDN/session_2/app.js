// const ReactDOM = require("react-dom/client");
import ReactDOM from 'react-dom/client';
import React from 'react';
import Homepage from './src/pages/homepages/homepage.js';
// import Homepage from './src/pages/homepages/Navbar.js';
// import Homepage from './src/pages/homepages/CategoryRow.js';
// import Homepage from './src/pages/homepages/Card.js';
// import Homepage from './src/pages/homepages/Carousal.js';
console.log("hello from React")
const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
// const head = React.createElement("h1",{},"Hello From react")

// const arr= [
//     {
// title:"Laptop",
// price:'42,999'
//     },
//     {
// title:"Mobile",
// price:'49,599'
//     },
//     {
// title:"Mixer",
// price:'4,999'
//     },
// ]
// const Heading = ()=>{
//     return<h1>HElo this is react</h1>
// }
// const obj = {
//     title:'Laptop',
//         price:'42,999'
// }
const App = () => {
    return <Homepage/>
}
console.log("hello abhi");
root.render(<App/>)
// console.log(Heading())
// console.log(<App/>)