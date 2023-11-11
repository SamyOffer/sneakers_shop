/* eslint-disable no-unused-vars */
import photo_garde from "../assets/photo_garde_2.png";
import SlidingAnimationHomePage from "./SlidingAnimationHomePage";
import air_max_90 from "../assets/air_max_90.png";
import air_force_1 from "../assets/air_force_1.png";
import nike_react_element from "../assets/nike_react_element.png";
import { Link } from "react-router-dom";
import modeles from '../database/modeles.json';
import React, { useState, useEffect } from 'react';


const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => { // useEffect permet d'effectuer des actions au chargement de la page
    const importImages = async () => { // async permet d'attendre que les images soient chargées
      const importedImages = await Promise.all( // Promise.all permet d'attendre que toutes les promesses soient résolues
        modeles.map(async (modele) => { // map permet de parcourir tous les modeles de paires de sneakers
          const { default: image } = await import(`../assets/${modele.lien}`); // import permet d'importer une image
          return { ...modele, image }; // on retourne un objet avec les propriétés du modele et l'image
        })
      );
      setImages(importedImages); // on met à jour le state avec les images
    };

    importImages();
  }, []);


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
      <div className='flex flex-wrap ml-44'>
        {images.slice(0,8).map((modele) => (
            <Link to={`/ProductPage/${modele.id}`} className='cursor-pointer mb-8 mr-8'>
            <img
                src={modele.image}
                alt={modele.nom}
                key={modele.id}
                className="object-cover w-[15em] h-[15em]"
            />        
            <div className='text-xl font-bold flex justify-between'>
                <div>{modele.nom}</div>
                <div>{modele.prix}€</div>
            </div>
            </Link>
        ))}
        </div>

      {/*
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
        <Link to="/ProductPage/air_max_90" className="cursor-pointer">
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
    */}

    </div>
  );
};

export default HomePage;
