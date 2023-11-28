import React from 'react';
import { useState, useEffect } from 'react';
import './../../Styles/TailWind.css';
import './../../Styles/Styles.css';

import Sidebar from './../../Components/Sidebar';
import Navbar from './../../Components/Navbar';
import OverLay from './../../Components/Overlay';
import Searchbar from './../../Components/Searchbar';
import Card from './../../Components/Cards';

import products from '../../Components/ArrayData';
const HomePageBody = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    sessionStorage.setItem('darkMode', JSON.stringify(newDarkModeState));
  };
  useEffect(() => {
    const savedDarkMode = JSON.parse(sessionStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode);
    }
  }, []);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar isDarkMode={isDarkMode} />

      <div className={`app-frame ${isDarkMode ? 'bg-darkmode dark-mode' : ''}`}>
        <Navbar
          pageTitle="Product"
          DesktopNavbar=" "
          MobileNavbar=" "
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className="p-10 lg:p-2">
          <Searchbar isDarkMode={isDarkMode} />
          <section
            className={`grid grid-cols-4 gap-4  py-8 grid-container 1xl:grid-cols-3  xl:grid-cols-2 3xs:grid-cols-1  ${
              isDarkMode ? 'bg-darkmode' : ''
            }`}
            isDarkMode={isDarkMode}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                {...product}
                isDarkMode={isDarkMode}
                product={product}
              />
            ))}
          </section>
        </div>
        <OverLay />
      </div>
    </div>
  );
};

export default HomePageBody;
