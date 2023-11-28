import React from 'react';
import SearchIcon from './../Assets/Icons/search.svg';
import searchGreyIcon from './../Assets/Icons/searchGrey.svg';
import notificationIcon from './../Assets/Icons/notification.svg';
import notificationGreyIcon from './../Assets/Icons/notificationGrey.svg';
import BlohshImg from './../Assets/Images/Blohsh.jpg';
import AngleDownBlackIcon from './../Assets/Icons/AngleDownBlack.svg';
import AngleDownGreyIcon from './../Assets/Icons/AngleDownGrey.svg';
import { toggleNav } from './../JavaScript.js';
import BarsIcon from './../Assets/Icons/Bars.svg';
import XmarkIcon from './../Assets/Icons/Xmark.svg';
import BarsGreyIcon from './../Assets/Icons/BarsGrey.svg';
import XmarkGreyIcon from './../Assets/Icons/XmarkGrey.svg';
import LightModeIcon from './../Assets/Icons/LightMode.svg';
import DarkModeIcon from './../Assets/Icons/DarkMode.svg';

import { useState } from 'react';

const Navbar = (props) => {
  const { isDarkMode, toggleDarkMode } = props;
  const [icon, setIcon] = useState(BarsIcon);
  const [icon2, setIcon2] = useState(BarsGreyIcon);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
    setIsOverlayOpen(!isOverlayOpen);
    setIcon2(isOverlayOpen ? BarsGreyIcon : XmarkGreyIcon);
  };
  return (
    <div
      className={`sticky top-0 p-5 navbar z-10 bg-white  ${
        isDarkMode ? 'bg-card border-1 border-greyBlue dark-mode' : ''
      }`}
    >
      {props.DesktopNavbar && (
        <div className="flex flex-row items-center justify-between 2xs:hidden">
          <div>
            <h1
              className={`text-3xl font-bold  ${
                isDarkMode ? 'text-silver' : ''
              }`}
            >
              {props.pageTitle}
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4 2xs:hidden">
              <img
                src={isDarkMode ? searchGreyIcon : SearchIcon}
                className="w-7 bounce cursor-pointer"
              />

              <img
                src={isDarkMode ? notificationGreyIcon : notificationIcon}
                className="w-7 bounce cursor-pointer"
              />
              <img
                src={BlohshImg}
                className="w-7 bounce rounded-full cursor-pointer"
              />
            </div>

            <img
              src={isDarkMode ? AngleDownGreyIcon : AngleDownBlackIcon}
              className="w-7 bounce cursor-pointer"
            />
            <img
              src={isDarkMode ? LightModeIcon : DarkModeIcon}
              onClick={toggleDarkMode}
              className="w-7 bounce cursor-pointer"
            />
            <div onClick={handleToggleNav} className="bar-icon cursor-pointer">
              <img
                src={isDarkMode ? icon2 : icon}
                className="w-7 bounce cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
      {props.MobileNavbar && (
        <div className="flex flex-row items-center justify-between hidden 2xs:flex ">
          <div className="bar-icon cursor-pointer flex gap-2">
            <div onClick={handleToggleNav} className="bar-icon cursor-pointer">
              <img
                src={isDarkMode ? icon2 : icon}
                className="w-7 bounce cursor-pointer"
              />
            </div>
          </div>
          <div>
            <h1
              className={`text-2xl font-bold  ${
                isDarkMode ? 'text-silver' : ''
              }`}
            >
              {props.pageTitle}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={BlohshImg}
              className="w-7 bounce rounded-full cursor-pointer"
            />
            <img
              src={isDarkMode ? LightModeIcon : DarkModeIcon}
              onClick={toggleDarkMode}
              className="w-7 bounce cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
