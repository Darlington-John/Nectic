import React, { useState } from 'react';
import AngleUpIcon from './../Assets/Icons/AngleUp.svg';

import AngleDownIcon from './../Assets/Icons/AngleDown.svg';

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(props.defaultOpen || false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`accordion-item flex flex-col gap-3 ${isOpen ? 'open' : ''}`}
    >
      <div
        className={`accordion-title ${
          isOpen ? 'bluex bg-blue text-white ' : ''
        }  flex items-center justify-between text-silver hover:bg-lighterBlue `}
        onClick={toggleAccordion}
      >
        <div className="flex gap-2">
          {isOpen ? (
            <img src={props.titleIcon} className="w-4" />
          ) : (
            <img src={props.titleCloseIcon} className="w-4" />
          )}
          <h1>{props.title}</h1>
        </div>
        {isOpen ? (
          <img src={AngleUpIcon} className="w-4" />
        ) : (
          <img src={AngleDownIcon} className="w-4" />
        )}
      </div>
      {isOpen && (
        <div className="accordion-content ">
          <div className="content-inner pl-5">
            <div className="flex flex-col items-start gap-2 pl-5  buttons-container">
              {props.LinkOne && (
                <button className="bg-lightBlue rounded-md w-full p-2 text-start text-blue active:bg-blue">
                  {' '}
                  {props.LinkOne}
                </button>
              )}
              {props.LinkTwo && (
                <button className=" rounded-md w-full p-2 text-start text-silver hover:bg-lighterBlue">
                  {props.LinkTwo}
                </button>
              )}
              {props.LinkThree && (
                <button className=" rounded-md w-full p-2 text-start text-silver hover:bg-lighterBlue">
                  {props.LinkThree}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
