import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.config.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 p-5 shadow-lg h-screen object-contain">
      <div className="">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pb-2">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <hr className="py-2" />
      <div>
        <h1 className="font-bold ">Watch Later</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
