import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './ArrayData';
import LocationImg from './../Assets/Icons/Location.svg';
import LocationGreyImg from './../Assets/Icons/LocationGrey.svg';
const Salesbar = ({ isDarkMode }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));
  const options = [
    'Quantity',
    '1',
    '2',
    '3',
    '4',
    '5',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div
      className={`text-black text-sm  xs:text-base flex  flex-col gap-2 border-solid border-2 border-lightBlue p-4 rounded-md  1xl:col-start-2 1xl:col-end-2 md:col-span-3  ${
        isDarkMode ? 'text-silver sales-bar' : ''
      }`}
    >
      <h1 className="text-2xl  xs:text-base">
        {product ? product.Amount : '-'}
      </h1>
      <h1>No Import Fees Deposit & $24.50 Shipping to Nigeria</h1>
      <h1>
        Delivery <span className="font-bold">Monday, December 4.</span> Order
        within 4 hrs 14 mins
      </h1>
      <h1>
        Or
        <br /> fastest delivery{' '}
        <span className="font-bold">Tuesday, November 21</span>
      </h1>
      <div className="flex flex-row gap-2 items-center">
        {isDarkMode ? (
          <img src={LocationGreyImg} className="w-4" />
        ) : (
          <img src={LocationImg} className="w-4" />
        )}
        <h1
          className={`text-black text-sm  xs:text-sm ${
            isDarkMode ? 'text-silver' : ''
          }`}
        >
          Deliver to Nigeria
        </h1>
      </div>
      <h1
        className={`text-blue text-lg  xs:text-sm ${
          isDarkMode ? 'text-lightBlue' : ''
        }`}
      >
        In Stock
      </h1>
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
      <button className="rounded-full bg-blue bounce-sm text-white p-2">
        Add to cart
      </button>
      <button className="rounded-full bg-blue bounce-sm text-white p-2">
        Buy now
      </button>
    </div>
  );
};

export default Salesbar;
