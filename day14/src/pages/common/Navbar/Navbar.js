import { useContext } from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';
import PointsContext from "../../../context/pointsContext";


const Navbar = (props) => {
    const contextValues = useContext(PointsContext)
    console.log(contextValues);
    const page = props.page;

    const customColor = (x) => {
        return {color: page=== x ?'red':'white'}
    }

    return(
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')}>Home</Link>
                <Link to="/image-generator" style={customColor('imageGenerator')} >Image Generator</Link>
                <Link to="/history"  style={customColor('history')}>History</Link>
                <Link to="/contact" >Contact Us</Link>
                <Link to="/help" >Help</Link>
                <Link to="/signup" style={customColor('signup')}>Signup</Link>
            </div>
            <div className="right" style={{padding: '4px', color: 'brown'}}>
            {contextValues.userPoints}
            </div>
            {contextValues.isLoggedIn?
                <button onClick={contextValues.logout}>Logout</button>
                :<button onClick={contextValues.login}>Login</button>
            }
        </div>
    )
}

export default Navbar;