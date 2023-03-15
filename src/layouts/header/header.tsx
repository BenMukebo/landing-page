import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuItem } from '../../modal/index';
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { CgClose } from 'react-icons/cg';
import { FaAngleDoubleRight } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
// import styles from './header.module.scss';

import './header.scss';

type Props = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  isVisible: boolean;
  other?: any;
};

export const Header: React.FC<Props> = ({ children }) => {
  const MenuLinks: MenuItem[] = [
    {
      name: 'Home',
      linkTo: './'
    },
    {
      name: 'Gorilla Safaris',
      linkTo: './gorilla'
    },
    {
      name: 'Tailormade Safari',
      linkTo: './products'
    },
    {
      name: 'Destinations',
      linkTo: './team'
    },
    {
      name: 'Blogs',
      linkTo: './contacts'
    }
  ]

  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  // const [showNavBar, setShowNavBar] = React.useState<string>('hidden');
  const [colorChange, setColorchange] = useState<boolean>(false);


const preventScrolling = () => {
  if (!burgerClicked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}

  const handleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
    preventScrolling();
    // burgerClicked ? setShowNavBar('show') : setShowNavBar('hidden');
    // console.log('New showSideBar:', burgerClicked);
  }

  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  // const navigate = useNavigate();


  return (
    <header className="header_container">
      <> 
        {children}
      </>
      <motion.div className={`header-scrolled  ${(colorChange || burgerClicked) && 'colorChange'} d-flex flex-center`}>
        <motion.div className="logo">
          <NavLink to="./">
            <img src={logo} alt="logo" />
          </NavLink>
        </motion.div>

        <motion.nav className="navbar d-flex flex-center">
          <motion.div className="hamburger-lines">
            <motion.button
              aria-label="Opened"
              type="button" onClick={handleBurgerClick}>
              <IconContext.Provider value={{ className: 'burger_class' }}>
                {!burgerClicked ? (
                  <FiMenu />
                  ) : (
                  <CgClose />
                )}
              </IconContext.Provider>
            </motion.button>
          </motion.div>

          {/* <ul className={`${styles.nav_menu} ${showNavBar ? styles.show : styles.hidden}`}> */}
          <motion.ul className={`nav_menu ${burgerClicked && 'show'} d-flex flex-column`}>
          {/* <ul className={`nav_menu ${showNavBar} d-flex flex-column`}> */}
            {MenuLinks.map((menu: MenuItem) => (
              <motion.li key={menu.name} className="menu_item">
                <NavLink to={menu.linkTo} onClick={handleBurgerClick}>
                    {menu.name}
                    <span><FaAngleDoubleRight /></span>
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav> 
      </motion.div>
    </header>
  );
};
