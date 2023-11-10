import React from "react";
import photo_garde from "../assets/photo_garde_2.png";
import SlidingAnimationHomePage from "./SlidingAnimationHomePage";
const HomePage = () => {
  return (
    // Home page -> affiche la photo de la page d'acceuil avec une animation et des paires à vendre dans différentes catégories
    <div>
      <img src={photo_garde} alt="photo_garde" />
      <SlidingAnimationHomePage />
      <div
        className="text-3xl text-left font-bold "
        style={{ marginLeft: "20%" }}>
        Nouveautés
      </div>


      <div
        className="text-3xl text-left font-bold "
        style={{ marginLeft: "20%" }}>
        Voir tout
      </div>
    </div>
  );
};

export default HomePage;
