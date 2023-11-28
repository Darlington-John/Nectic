import React from 'react';
import searchGreyIcon from './../Assets/Icons/searchGrey.svg';
import AngleDownGreyIcon from './../Assets/Icons/AngleDownGrey.svg';
import PlusIcon from './../Assets/Icons/Plus.svg';
const Searchbar = ({ isDarkMode }) => {
  return (
    <div className="flex flex-row items-center justify-between flex-wrap gap-3">
      <div className="flex flex-row items-center gap-4 box-border 2xs:justify-between 2xs:w-full">
        <div className="relative flex items-center w-72 2xs:w-1/2">
          <input
            className={`w-full p-3 pl-12 border-2 input rounded-medium text-sm ${
              isDarkMode ? 'dark-mode' : ''
            }`}
            placeholder="Search..."
          />
          <button className="w-4 absolute left-0 hover:bg-lighterBlue h-full px-5 flex items-center justify-center box-border rounded-md">
            <img
              src={searchGreyIcon}
              className="w-4 "
              style={{ minWidth: '20px' }}
            />
          </button>
        </div>
        <div
          className={`p-3    rounded-medium text-sm flex gap-3 input w-36 justify-between 2xs:w-1/2 ${
            isDarkMode ? 'dark-mode' : ''
          }`}
        >
          <span className="text-sm text-silver whitespace-nowrap">
            All product
          </span>
          <img
            src={AngleDownGreyIcon}
            className="w-4 "
            style={{ minWidth: '20px' }}
          />
        </div>
      </div>
      <button className="bg-blue p-3 px-5 text-white rounded-md flex gap-2 items-center 2xs:w-full 2xs:justify-center bounce-sm">
        <img src={PlusIcon} className="w-4 " style={{ minWidth: '20px' }} />
        <span> Add new</span>
      </button>
    </div>
  );
};

export default Searchbar;
