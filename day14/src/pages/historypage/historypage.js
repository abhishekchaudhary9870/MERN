import Navbar from "../common/Navbar/Navbar";
import {useState, useEffect} from "react";
import "./historyPage.css";
import HistoryCard from "./historyCard";

const HistoryPage = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");


    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        setData(obj.products);
    }

    useEffect(()=>{
        getData();
    }, [searchText]);

    return (
        <div>
            <Navbar page="history"/>
            <input className="search-box-input" onChange={(e)=>{setSearchText(e.target.value);}}/>
            <div className="history-main-container">
                {data.map((item)=>{
                    return <HistoryCard item={item}/>
                })}
            </div>
        </div>
    )
};

export default HistoryPage;