import React from 'react';
import { NavLink,Nav,Bars,NavMenu,NavBtn,NavBtnLink} from './navbarelements'; 

const Navbar = () => {
    return (
        <>
         <Nav>
             <NavLink to="/">
                 <h1>Ujwal L</h1>
             </NavLink>
             <Bars />
             <NavMenu>
                 <NavLink to="/about" activeStyle>
                     About
                 </NavLink>
                 
                 <NavLink to="/contact" activeStyle>
                    Contact
                 </NavLink>
                 <NavLink to="/Sign-up" activeStyle>
                     Sign Up
                 </NavLink>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
             </NavMenu>
             {/* <NavBtn>
                 <NavBtnLink to="/signin">Sign In</NavBtnLink>
             </NavBtn> */}
         </Nav>
        </>
    );
};

export default Navbar
