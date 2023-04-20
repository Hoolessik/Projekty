import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                  <img src={logo}></img>
                </Link>
                <div className='menu-icon' OnClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar;