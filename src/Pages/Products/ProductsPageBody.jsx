import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Navbar from '../../Components/Navbar';

import OverLay from '../../Components/Overlay';
import Sidebar from '../../Components/Sidebar';

import Salesbar from '../../Components/Salesbar';
import products from '../../Components/ArrayData';
const ProductPage = (props) => {
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
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  const buttonToImageMap = {
    button1: product.FirstImg,
    button2: product.SecondImg,
    button3: product.ThirdImg,
    button4: product.FourthImg,
    button5: product.FifthImg,
  };
  const buttonToColor = {
    button1: 'Grey blue',
    button2: 'Yellow',
    button3: 'Black',
    button4: 'Grey brown',

    button5: 'Purple',

    button6: 'Silver',
    button7: 'Sage green',
    button8: 'Pink',
    button9: 'Maroon',
    button10: 'Sea green',
    button11: 'Dark khaki',
  };
  const [selectedColor, setSelectedColor] = useState('');
  const getRandomButtonId = () => {
    const randomIndex = Math.floor(Math.random() * 5) + 1;
    return `button${randomIndex}`;
  };

  const [activeButton, setActiveButton] = useState('');
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const randomButtonId = getRandomButtonId();
    setActiveButton(randomButtonId);
    setCurrentImage(buttonToImageMap[randomButtonId]);
  }, [
    product.FirstImg,
    product.SecondImg,
    product.ThirdImg,
    product.FourthImg,
    product.FifthImg,
  ]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setCurrentImage(buttonToImageMap[buttonId]);
  };
  const handleColorPick = (buttonColor) => {
    setSelectedColor(buttonToColor[buttonColor]);
  };
  const options = [
    'Extra Small (XS)',
    'Small (S)',
    'Medium (M)',
    'Large (L)',
    'Extra Large (XL)',
    'XXL (2XL)',
  ];
  const [selectedOption, setSelectedOption] = useState(options[2]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/*  */}
      <Sidebar isDarkMode={isDarkMode} />

      <div className={`app-frame ${isDarkMode ? 'bg-darkmode dark-mode' : ''}`}>
        <Navbar
          pageTitle={product ? product.ProductTitle : 'Product Page'}
          DesktopNavbar=" "
          MobileNavbar=" "
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className="p-10 lg:p-2">
          <section
            className={` grid grid-cols-5 gap-8  py-8 pt-16 1xl:grid-cols-2   md:grid-cols-1 md:px-16 2xs:px-6 items-start ${
              isDarkMode ? 'bg-darkmode' : ''
            }`}
            isDarkMode={isDarkMode}
          >
            <div
              className={`flex flex-col col-span-2 1xl:col-span-1 md:col-span-3 items-start bg-white rounded-md p-3 hover:shadow-xl  border-2 border-lighterBlue sticky-img ${
                isDarkMode ? 'card border-1 border-greyBlue' : ''
              }`}
            >
              <div className="flex flex-row items-center justify-center gap-10 ">
                <div className="  product-page-img-container pt-2 ">
                  {currentImage && (
                    <img src={currentImage} className="w-full" />
                  )}
                </div>
                <div>
                  {product.FilterButton && (
                    <div className="flex flex-col gap-2 items-center">
                      {product.greyBlue && (
                        <button
                          data-tooltip="Grey blue"
                          className={`bg-greyBlue p-2 rounded-full tooltip-btn ${
                            activeButton === 'button1'
                              ? 'outline  outline-greyBlue   outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button1');
                            handleColorPick('button1');
                          }}
                        ></button>
                      )}
                      {product.yellow && (
                        <button
                          data-tooltip="Yellow"
                          className={`bg-yellow p-2 rounded-full tooltip-btn ${
                            activeButton === 'button1'
                              ? 'outline  outline-yellow   outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button1');
                            handleColorPick('button2');
                          }}
                        ></button>
                      )}
                      {product.greyBrown && (
                        <button
                          data-tooltip="Grey brown"
                          className={`bg-greyBrown p-2 rounded-full  tooltip-btn ${
                            activeButton === 'button2'
                              ? 'outline outline-greyBrown  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button2');
                            handleColorPick('button4');
                          }}
                        ></button>
                      )}
                      {product.purple && (
                        <button
                          data-tooltip="Purple"
                          className={`bg-purple p-2 rounded-full tooltip-btn ${
                            activeButton === 'button2'
                              ? 'outline outline-purple  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button2');
                            handleColorPick('button5');
                          }}
                        ></button>
                      )}
                      {product.blackButton && (
                        <button
                          data-tooltip="Black"
                          className={`bg-black p-2 rounded-full  tooltip-btn ${
                            activeButton === 'button2'
                              ? 'outline outline-black  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button2');
                            handleColorPick('button3');
                          }}
                        ></button>
                      )}
                      {product.silver && (
                        <button
                          data-tooltip="Silver"
                          className={`bg-silver p-2 rounded-full tooltip-btn ${
                            activeButton === 'button3'
                              ? 'outline outline-silver  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button3');
                            handleColorPick('button6');
                          }}
                        ></button>
                      )}

                      {product.sageGreen && (
                        <button
                          data-tooltip="Sage green"
                          className={`bg-sageGreen p-2 rounded-full  tooltip-btn ${
                            activeButton === 'button3'
                              ? 'outline outline-sageGreen  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button3');
                            handleColorPick('button7');
                          }}
                        ></button>
                      )}
                      {product.buttonPink && (
                        <button
                          data-tooltip="Pink"
                          className={`bg-pink p-2 rounded-full tooltip-btn ${
                            activeButton === 'button4'
                              ? 'outline outline-pink  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button4');
                            handleColorPick('button8');
                          }}
                        ></button>
                      )}
                      {product.buttonMaroon && (
                        <button
                          data-tooltip="Maroon"
                          className={`bg-maroon p-2 rounded-full  tooltip-btn ${
                            activeButton === 'button4'
                              ? 'outline outline-maroon  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button4');
                            handleColorPick('button9');
                          }}
                        ></button>
                      )}
                      {product.seaGreen && (
                        <button
                          data-tooltip="Sea green"
                          className={`bg-seaGreen p-2 rounded-full tooltip-btn ${
                            activeButton === 'button5'
                              ? 'outline outline-seaGreen  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button5');
                            handleColorPick('button10');
                          }}
                        ></button>
                      )}
                      {product.darkKhaki && (
                        <button
                          data-tooltip="Dark khaki"
                          className={`bg-darkKhaki p-2 rounded-full  tooltip-btn ${
                            activeButton === 'button5'
                              ? 'outline outline-darkKhaki  outline-offset-2 outline-2'
                              : ''
                          }`}
                          onClick={() => {
                            handleButtonClick('button5');
                            handleColorPick('button11');
                          }}
                        ></button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col items-start gap-3 col-span-2 1xl:col-span-1 md:col-span-3  text-black  ${
                isDarkMode ? 'text-silver' : ''
              }`}
            >
              <h1 className="text-2xl font-bold xs:text-base">
                {product ? product.ProductTitle : '-'}
              </h1>
              <div className="flex flex-row gap-2 items-center">
                <h1
                  className="text-silver text-lg  xs:text-base
                 "
                >
                  {product ? product.Price : '-'}
                </h1>
                <h1
                  className={`text-red text-2xl  xs:text-base ${
                    isDarkMode ? 'text-redDark' : ''
                  }`}
                >
                  {product ? product.Amount : '-'}
                </h1>
              </div>
              <select
                id="dropdown"
                className={`p-3    rounded-medium text-sm flex gap-3 input  justify-between text-silver ${
                  isDarkMode ? 'dark-mode' : ''
                }`}
                value={selectedOption}
                onChange={handleOptionChange}
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <p className="text-base ">
                <span className="text-silver">Color:</span>{' '}
                {selectedColor ? (
                  <span className="font-bold ">{selectedColor}</span>
                ) : (
                  <span
                    className={`text-red  ${isDarkMode ? 'text-redDark' : ''}`}
                  >
                    {' '}
                    Pick a color
                  </span>
                )}
              </p>
              <div className="flex flex-col w-full pt-5 gap-3">
                <h1 className="text-xl">Product Details</h1>
                <div className="flex flex-row items-baseline justify-between w-full">
                  <h1 className="font-bold text-sm ">Fabric type:</h1>
                  <h1 className=" text-sm  xs:text-sm">
                    {product ? product.Material : '-'}
                  </h1>
                </div>
                <div className="flex flex-row items-baseline justify-between w-full gap-3">
                  <h1 className="  font-bold text-sm ">Care Instructions:</h1>
                  <h1
                    className={`text-black text-sm  xs:text-sm ${
                      isDarkMode ? 'text-silver' : ''
                    }`}
                  >
                    {product ? product.care : '-'}
                  </h1>
                </div>
                <div className="flex flex-row items-baseline justify-between w-full">
                  <h1 className="font-bold text-sm ">Origin:</h1>
                  <h1 className=" text-sm  xs:text-sm">
                    {product ? product.origin : '-'}
                  </h1>
                </div>
                <div className="flex flex-row items-baseline justify-between w-full">
                  <h1 className="  font-bold text-sm ">Closure type:</h1>
                  <h1 className="  font-bold text-sm ">
                    {product ? product.closure : '-'}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col w-full pt-5 gap-3">
                <h1 className="  text-xl ">About this item</h1>
                <div className="flex flex-col gap-3">
                  <ul className="   text-sm  flex flex-col gap-3 ">
                    <li>{product ? product.AboutOne : '-'}</li>
                    <li> {product ? product.AboutTwo : '-'}</li>
                    <li> {product ? product.AboutThree : '-'}</li>
                  </ul>
                </div>
              </div>
            </div>
            <Salesbar isDarkMode={isDarkMode} />
          </section>
        </div>
        <OverLay />
      </div>
    </div>
  );
};
export default ProductPage;
