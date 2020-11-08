import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MdAirlineSeatLegroomReduced} from "react-icons/md";
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <MdAirlineSeatLegroomReduced className='navbar-icon'/>
                        ELABORATE
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div >
                </div>
            </div>
        </>
    )
}

export default Navbar;