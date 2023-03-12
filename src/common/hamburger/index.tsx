import React, { useState, useContext } from "react";
// import { GlobalStore } from '../../../contexts/globalStore';
import './hamburger.scss';

interface ButtonProps {
  disabled?: boolean | undefined;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // name?: string;
  // children?: React.ReactNode;
}

export const Hamburger: React.FC <ButtonProps> = ({disabled}) => {
  // const { showSideBar, setShowSideBar } = useContext(GlobalStore);
  const [burger_class, setBurgerClass] = useState<string>("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  // toggle burger menu change

  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked");
      }
      else {
          setBurgerClass("burger-bar unclicked");
      }
      setIsMenuClicked(!isMenuClicked)
      // setShowSideBar(!showSideBar);
  }

  return (
    <div className="nav">
      <button className="burger-menu" 
        type="button"
        aria-label="menu"
        disabled={disabled}
        onClick={updateMenu}
      >
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
      </button>
    </div> 
  )
}

{/* <Hamburger disabled={burgerBtnActon} /> */}
