// const parent = document.getElementById("root");
// const parent2 = document.getElementById("root2");
// const root = ReactDOM.createRoot(parent);
// const root2 = ReactDOM.createRoot(parent2);
// parent.innerText = "Hello from Dom";
// const heading = document.createElement("h1")
// heading.innerText="hello from JS DOM";
// parent.appendChild(heading);
// const list = document.createElement("ol");
// const listElement1 = document.createElement("li");
// listElement1.innerText="item1"
// const listElement2 = document.createElement("li");
// listElement2.innerText="item2"
// list.appendChild(listElement1)
// list.appendChild(listElement2)
// parent.appendChild(list)
// console.log(react)
// console.log("hello one")
// const heading = React.createElement("h1",{key:"h1"},"hello from React")
// const listItem1 = React.createElement("li",{
//     key:"li1",
//     className:"li-c-1",
//     id:'id1',

// },"Item1")
// const listItem2 = React.createElement("li",{key:"li2",style:{backgroundColor:'red'}},"Item2")
// const list = React.createElement("ol",{key:"list"},[listItem1,listItem2])
// console.log(heading)
// root.render(heading);
// root.render([heading,list]);
// root2.render([heading,list]);




const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const heading = <h1>Hello from React</h1>
// const str = "hello from React"
const head = <h1>{str}</h1>
const str= {hello: 'World', name:'Abhi'}
const s1 = {
    backgroundColor:'red',
    border:'1px solid black',
}
const s2 = {
    backgroundColor:'blue',
    border:'1px solid black',
}
const li1 = <li className="li-c-1"name={str} style={s1}>item 1</li>
const li2 = <li className="li-c-2"name={str} style={s2}>item 2</li>
const arr = [li1,li2]
const list = <ul>{arr.map((elem)=>{return elem;})}</ul>


root.render([list]);
