/* eslint-disable no-unused-vars */
import React from "react";
import photo_garde from "../assets/photo_garde_2.png";
import SlidingAnimationHomePage from "./SlidingAnimationHomePage";
import air_max_90 from "../assets/air_max_90.png";
import air_force_1 from "../assets/air_force_1.png";
import nike_react_element from "../assets/nike_react_element.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("Home Page air_max_90" ,{air_max_90} );
  return (
    <div className="flex flex-col">
      {" "}
      {/* Utilisation de flex-col pour une disposition en colonne */}
      <img src={photo_garde} alt="photo_garde" />
      <div
        className="text-3xl text-left font-bold "
        style={{ marginLeft: "20%" }}>
        New Items
      </div>
      <div
        className="NouvellesImages flex flex-row flex-wrap space-x-10"
        style={{ marginLeft: "10em" }}>

        <div className="NouvellesImages__image">
        <Link to="/product/air_max_90" className="cursor-pointer">
          <img
            src={air_max_90}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
          
        </div>

        <div className="NouvellesImages__image">
          <Link to="/product/air_force_1" className="cursor-pointer">
          <img
            src={air_force_1}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
        <div className="NouvellesImages__image">
          <Link to="/product/nike_react_element" className="cursor-pointer">
          <img
            src={nike_react_element}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
        <div className="NouvellesImages__image">
          <Link to="/product/air_max_90" className="cursor-pointer">
          <img
            src={air_max_90}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
      </div>
      <div
        className="text-3xl text-left font-bold "
        style={{ marginLeft: "20%" }}
      >
        See all
      </div>
      <div
        className="NouvellesImages flex flex-row flex-wrap space-x-10"
        style={{ marginLeft: "10em" }}>
        <div className="NouvellesImages__image">
        <Link to="/product/air_max_90" className="cursor-pointer">
          <img
            src={air_max_90}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
        
        <div className="NouvellesImages__image">
        <Link to="/product/air_force_1" className="cursor-pointer">
          <img
            src={air_force_1}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
        <div className="NouvellesImages__image">
        <Link to="/product/nike_react_element" className="cursor-pointer">
          <img
            src={nike_react_element}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
        <div className="NouvellesImages__image">
        <Link to="/product/air_max_90" className="cursor-pointer">
          <img
            src={air_max_90}
            alt="air_max_90"
            className="object-cover w-[15em] h-[15em] "/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
