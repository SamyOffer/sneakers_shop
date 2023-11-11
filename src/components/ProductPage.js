import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import modeles from '../database/modeles.json';
import Header from './Header';
import marques from '../database/marques.json';

const ProductPage = () => {
  const { sneakerId } = useParams(); // Utilisez sneakerId ici
  const [sneaker] = useState(modeles[sneakerId-1]);
  const [marque, setMarque] = useState(0);

  const [images, setImages] = useState([]);

  useEffect(() => { // useEffect permet d'effectuer des actions au chargement de la page
    const importImages = async () => {
      const { default: image } = await import(`../assets/${sneaker.lien}`); // import permet d'importer une image
      setImages(image); // on met à jour le state avec les images
    }
    importImages();
    setMarque(marques[sneaker.marque_id]); // on met à jour le nom de la marque après avoir récupéré les données 
  }, [sneaker.lien, sneaker.marque_id])

  return (
    console.log(images),
    console.log("sneaker" , sneaker),
    <div>
      <Header />
      <div className="flex ">
          <img
            src={images}
            alt="air_max_90"
            className="object-cover ml-10 mt-10 w-[30em] h-[30em] "
          />  
          <div className="ml-20 text-xl font-bold mt-10">
              <p>{marque.nom}</p>
              <p>{sneaker.nom}</p>
              <p>A partir de {sneaker.prix}€</p>
              <p>Tailles disponibles : </p>
              {sneaker.tailles.map((taille) => (
                <div>{taille}</div>
              ))}
            
          </div>
      </div>
      
      {/* Affichez d'autres détails de la sneaker... */}
    </div>
  );
};

export default ProductPage;
