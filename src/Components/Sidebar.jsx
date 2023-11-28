import React from 'react';
import { useState } from 'react';
import NoctisLogoImg from './../Assets/Images/NoctisLogo.svg';
import AppIcon from './../Assets/Icons/App.svg';
import cartIcon from './../Assets/Icons/cart.svg';
import cartGreyIcon from './../Assets/Icons/cartGrey.svg';
import userPlusIcon from './../Assets/Icons/userPlus.svg';
import userPlusGreyIcon from './../Assets/Icons/userPlusGrey.svg';
import peopleIcon from './../Assets/Icons/people.svg';
import peopleGreyIcon from './../Assets/Icons/peopleGrey.svg';
import chatIcon from './../Assets/Icons/chat.svg';
import chatGreyIcon from './../Assets/Icons/chatGrey.svg';
import { ReactComponent as MoveRightIcon } from './../Assets/Icons/MoveRight.svg';
import { ReactComponent as MoveLeftIcon } from './../Assets/Icons/MoveLeft.svg';
import Accordion from './Accordion';
import { Link } from 'react-router-dom';
const Sidebar = ({ isDarkMode }) => {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    setSidebarWidth((prevState) => (prevState === 0 ? 300 : 0));
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  return (
    <div
      className={`app-sidebar  overflow-auto ${isDarkMode ? 'dark-mode' : ''}`}
      id="sidebar-container"
      style={{ width: sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="app-sidebar-content ">
        {isOpen ? (
          <div className="flex flex-col items-center  w-full p-4 gap-8">
            <div className="flex flex-row items-center gap-2 ">
              <Link to="/">
                <img src={NoctisLogoImg} className="w-8 cursor-pointer" />
              </Link>
            </div>
            <MoveRightIcon
              className="w-10 cursor-pointer"
              onClick={toggleOpen}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-16 p-6 w-full ">
            <div
              className={`flex flex-row items-center gap-2 cursor-pointer absolute top-0  py-6 bg-white w-full  logo-container ${
                isDarkMode ? 'darkmode' : ''
              }`}
              style={{ maxWidth: '250px' }}
            >
              <Link to="/">
                <img src={NoctisLogoImg} className="w-8" />
              </Link>
              <Link to="/">
                <div className="text-blue text-3xl font-bold">NETIC</div>
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-24">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-0  p-3 rounded-md text-silver items-center">
                  <img src={AppIcon} className="w-10" />
                  <span>Dashboard</span>
                </div>
                <MoveLeftIcon
                  className="w-8 cursor-pointer"
                  onClick={toggleOpen}
                />
              </div>

              <Accordion
                title="Ecommerce"
                titleIcon={cartIcon}
                titleCloseIcon={cartGreyIcon}
                content="Content for Section 1"
                LinkOne="Product"
                LinkTwo="Product Details"
                LinkThree="Orders"
                defaultOpen={true}
              />
              <Accordion
                title="Customers"
                titleIcon={userPlusIcon}
                titleCloseIcon={userPlusGreyIcon}
                content="Content for Section 1"
                LinkOne="Product"
                LinkTwo="Product Details"
                LinkThree="Orders"
              />
              <Accordion
                title="CRM"
                titleIcon={peopleIcon}
                titleCloseIcon={peopleGreyIcon}
                content="Content for Section 1"
                LinkOne="Product"
                LinkTwo="Product Details"
                LinkThree="Orders"
              />
              <Accordion
                title="Chat"
                titleIcon={chatIcon}
                titleCloseIcon={chatGreyIcon}
                content="Content for Section 1"
                LinkOne="Product"
                LinkTwo="Product Details"
                LinkThree="Orders"
              />
              <Accordion
                title="companies"
                titleIcon={userPlusIcon}
                titleCloseIcon={userPlusGreyIcon}
                content="Content for Section 1"
                LinkOne="Product"
                LinkTwo="Product Details"
                LinkThree="Orders"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const SidebarMobile = () => {
  return (
    <div
      className="app-sidebar app-sidebar-mobile bg-deepBlack overflow-auto h-screen"
      id="sidebar-container"
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="app-sidebar-content ">
        <div className="flex flex-col gap-16 p-6">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <Link to="/">
              <img src={NoctisLogoImg} className="w-8" />
            </Link>
            <Link to="/">
              <div className="text-blue text-3xl font-bold">NETIC</div>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-0  p-3 rounded-md text-silver items-center">
                <img src={AppIcon} className="w-10" />
                <span>Dashboard</span>
              </div>
            </div>
            <Accordion
              title="Ecommerce"
              titleIcon={cartIcon}
              titleCloseIcon={cartGreyIcon}
              content="Content for Section 1"
              LinkOne="Product"
              LinkTwo="Product Details"
              LinkThree="Orders"
              defaultOpen={true}
            />
            <Accordion
              title="Customers"
              titleIcon={cartIcon}
              content="Content for Section 1"
              LinkOne="Product"
              LinkTwo="Product Details"
              LinkThree="Orders"
            />
            <Accordion
              title="CRM"
              titleIcon={cartIcon}
              content="Content for Section 1"
              LinkOne="Product"
              LinkTwo="Product Details"
              LinkThree="Orders"
            />
            <Accordion
              title="Chat"
              titleIcon={cartIcon}
              content="Content for Section 1"
              LinkOne="Product"
              LinkTwo="Product Details"
              LinkThree="Orders"
            />
            <Accordion
              title="companies"
              titleIcon={cartIcon}
              content="Content for Section 1"
              LinkOne="Product"
              LinkTwo="Product Details"
              LinkThree="Orders"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
