import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  const { isDarkMode } = props;

  const buttonToImageMap = {
    button1: props.FirstImg,
    button2: props.SecondImg,
    button3: props.ThirdImg,
    button4: props.FourthImg,
    button5: props.FifthImg,
  };

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
    props.FirstImg,
    props.SecondImg,
    props.ThirdImg,
    props.FourthImg,
    props.FifthImg,
  ]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setCurrentImage(buttonToImageMap[buttonId]);
  };
  return (
    <div>
      <div
        className={`flex flex-col items-start bg-white rounded-md p-3 hover:shadow-xl   border-2 border-lighterBlue  card-container ${
          isDarkMode ? 'card border-1 border-greyBlue' : ''
        }`}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <Link to={`/products/${props.id}`}>
            <h1
              className={`text-black text-xl font-bold xs:text-base ${
                isDarkMode ? 'text-silver' : ''
              }`}
            >
              {props.ProductTitle}
            </h1>
          </Link>
          {props.NewBtn && (
            <button className="bg-inputBlue rounded-full text-silver hover:text-white hover:bg-blue py-1 px-3 border-2 border-lighterBlue text-sm xs:text-xs">
              {props.NewBtn}
            </button>
          )}
        </div>
        <h5 className="text-base text-silver xs:text-base">{props.Material}</h5>

        <div className="flex flex-row items-center justify-around ">
          <div className="w-2/3  product-img-container pt-2">
            {currentImage && (
              <Link to={`/products/${props.id}`}>
                <img src={currentImage} className="w-full" />
              </Link>
            )}
          </div>

          {props.FilterButton && (
            <div className="flex flex-col gap-2 items-center">
              {props.greyBlue && (
                <button
                  data-tooltip="Grey blue"
                  className={`bg-greyBlue p-2 rounded-full tooltip-btn ${
                    activeButton === 'button1'
                      ? 'outline  outline-greyBlue   outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button1')}
                ></button>
              )}
              {props.yellow && (
                <button
                  data-tooltip="Yellow"
                  className={`bg-yellow p-2 rounded-full tooltip-btn ${
                    activeButton === 'button1'
                      ? 'outline  outline-yellow   outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button1')}
                ></button>
              )}
              {props.greyBrown && (
                <button
                  data-tooltip="Grey brown"
                  className={`bg-greyBrown p-2 rounded-full  tooltip-btn ${
                    activeButton === 'button2'
                      ? 'outline outline-greyBrown  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button2')}
                ></button>
              )}
              {props.purple && (
                <button
                  data-tooltip="Purple"
                  className={`bg-purple p-2 rounded-full tooltip-btn ${
                    activeButton === 'button2'
                      ? 'outline outline-purple  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button2')}
                ></button>
              )}
              {props.blackButton && (
                <button
                  data-tooltip="Black"
                  className={`bg-black p-2 rounded-full  tooltip-btn ${
                    activeButton === 'button2'
                      ? 'outline outline-black  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button2')}
                ></button>
              )}
              {props.silver && (
                <button
                  data-tooltip="Silver"
                  className={`bg-silver p-2 rounded-full tooltip-btn ${
                    activeButton === 'button3'
                      ? 'outline outline-silver  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button3')}
                ></button>
              )}

              {props.sageGreen && (
                <button
                  data-tooltip="Sage green"
                  className={`bg-sageGreen p-2 rounded-full  tooltip-btn ${
                    activeButton === 'button3'
                      ? 'outline outline-sageGreen  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button3')}
                ></button>
              )}
              {props.buttonPink && (
                <button
                  data-tooltip="Pink"
                  className={`bg-pink p-2 rounded-full tooltip-btn ${
                    activeButton === 'button4'
                      ? 'outline outline-pink  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button4')}
                ></button>
              )}
              {props.buttonMaroon && (
                <button
                  data-tooltip="Maroon"
                  className={`bg-maroon p-2 rounded-full  tooltip-btn ${
                    activeButton === 'button4'
                      ? 'outline outline-maroon  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button4')}
                ></button>
              )}
              {props.seaGreen && (
                <button
                  data-tooltip="Sea green"
                  className={`bg-seaGreen p-2 rounded-full tooltip-btn ${
                    activeButton === 'button5'
                      ? 'outline outline-seaGreen  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button5')}
                ></button>
              )}
              {props.darkKhaki && (
                <button
                  data-tooltip="Dark khaki"
                  className={`bg-darkKhaki p-2 rounded-full  tooltip-btn ${
                    activeButton === 'button5'
                      ? 'outline outline-darkKhaki  outline-offset-2 outline-2'
                      : ''
                  }`}
                  onClick={() => handleButtonClick('button5')}
                ></button>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full pt-4 gap-1">
          <div className="flex flex-row items-center justify-between ">
            <h4 className="text-silver text-sm">{props.ProductType}</h4>
            <h2 className="text-silver text-sm line-through">
              {props.Discount}
            </h2>
          </div>
          <div
            className={`flex flex-row items-center justify-between text-black  ${
              isDarkMode ? 'text-silver' : ''
            }`}
          >
            <h4 className="text-base font-bold">{props.Price}</h4>
            <h2 className=" text-xl  font-bold">{props.Amount}</h2>
          </div>
        </div>
      </div>
      {props.sliderImg && (
        <div>
          <img src={props.sliderImg} />
        </div>
      )}
    </div>
  );
};

export default Card;
