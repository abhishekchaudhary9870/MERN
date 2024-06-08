import { useEffect, useState } from "react";
import Navbar from "../common/Navbar/Navbar";
// import "./historyPage.css";
const dummydata = [
    {
    id:'1',
    title:'Flower',
    date:{
        day:'Mon',
        time:'12:00'
    }
},
    {
    id:'2',
    title:'Food',
    date:{
        day:'Mon',
        time:'12:00'
    }
},
    {
    id:'3',
    title:'Flora',
    date:{
        day:'Mon',
        time:'12:00'
    }
},
    {
    id:'4',
    title:'Fauna',
    date:{
        day:'Mon',
        time:'12:00'
    }
},
]

const changeTitle = ()=>{console.log('title changed')}
const changeDescription = ()=>{console.log('Description changed')}
const temp = ()=>{
    changeTitle();
    changeDescription();
}



const History=()=>{
    const [title, setTitle] = useState("Images");
    const [description, setDescription] = useState("these are Images");
    useEffect(()=>{
        console.log('Nothing = Everytime when the page is re=rendered')
    });
    useEffect(()=>{
        console.log('Empty= only when the page is rendered first time')
    },[]);
    useEffect(()=>{
        console.log('Title changed = only when the title is changed')
    },[title]);
    useEffect(()=>{
        console.log('description changed = when description is changed')
    },[description]);
    useEffect(()=>{
        console.log('Title And description changed = when title or description is changed')
    },[title,description]);
    return (
        <div>
             <Navbar /> 
             <div className="history-main">
                {/* <button onClick={changeTitle}>change title</button>
                <button onClick={temp}>Change Title and Description</button>
                <button onClick={changeDescription}>Change Description</button> */}
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
                <input value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>

                <h3>title = {title}</h3>
                <h3>description = {description}</h3>
           <div>
            {/* <h1>Flower</h1>
            <p>21-02-2024</p> */
            }
            {/* {
                dummydata.map((elem)=>{
                    return(
                        <div key={elem.id}>
                            <h3>{elem.title}</h3>
                            <p>{elem.date?.day}</p>
                            <p>{elem.date?.time}</p>

                        </div>
                    )
                })
            } */}
           </div>
             </div>
            </div> 
            
)}

export default History;