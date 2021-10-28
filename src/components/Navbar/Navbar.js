import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo, NavIcon,
    MobileIcon, NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const toggleClick = () => {
        setClick(!click);
    };

    const toggleButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        toggleButton()
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            Cloud9
                        </NavLogo>
                        <MobileIcon onClick={toggleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={toggleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>Products</NavLinks>
                            </NavItem>
                            <NavItemBtn>{button ?
                                (<NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>) :
                                (<NavBtnLink to="/sign-up">
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>)
                            }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
