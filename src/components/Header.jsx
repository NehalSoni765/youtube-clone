import React from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_LOGO } from "../utils/constants";
import { toggleMenu } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex items-center col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 cursor-pointer m-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleMenuHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <img src={YOUTUBE_LOGO} alt="Youtube Logo" className="w-32" />
      </div>
      <div className="items-center py-5 px-4 col-span-10">
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-4 rounded-3xl w-6/12 border rounded-r-none border-black"
        />
        <button className="py-2 px-4 border rounded-r-3xl border-black bg-gray-50 hover:bg-gray-200">
          🔍
        </button>
      </div>
      <div className="items-center py-8 px-4 col-span-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;

/**
 * Hamburger menu
 * icon
 *
 * searchbar text
 * search buton
 *
 * profile
 * settings
 */
