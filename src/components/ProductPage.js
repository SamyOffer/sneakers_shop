import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import modeles from "../database/modeles.json";
import Header from "./Header";
import marques from "../database/marques.json";
import { Listbox, Transition } from "@headlessui/react";

const ProductPage = () => {
  const { sneakerId } = useParams(); // Utilisez sneakerId ici
  const [sneaker] = useState(modeles[sneakerId - 1]);
  const [marque, setMarque] = useState(0);
  const [images, setImages] = useState([]);
  const toutesLesTailles = sneaker.tailles.map((taille, index) => ({
    id: index + 1,
    taille: taille,
  }));
  const [tailleEnCours, setTailleEnCours] = useState(
    toutesLesTailles[0].taille
  );

  useEffect(() => {
    // useEffect permet d'effectuer des actions au chargement de la page
    const importImages = async () => {
      const { default: image } = await import(`../assets/${sneaker.lien}`); // import permet d'importer une image
      setImages(image); // on met à jour le state avec les images
    };
    importImages();
    setMarque(marques[sneaker.marque_id]); // on met à jour le nom de la marque après avoir récupéré les données
  }, [sneaker.lien, sneaker.marque_id]);

  useEffect(() => {
    // Perform actions based on changes to tailleEnCours if needed
  }, [tailleEnCours]);

  console.log("tailleEnCours", tailleEnCours);
  return (
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
          <p>From {sneaker.prix}€</p>
        </div>
        {/* Affichage du menu déroulant des tailles disponibles */}
        <div className="ml-32 text-xl font-bold mt-10">
          <Listbox
            as="div"
            className="space-y-1 w-full"
            value={tailleEnCours}
            onChange={(selectedTaille) => setTailleEnCours(selectedTaille)}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700 pl-10 pr-10">
                  Select a size
                </Listbox.Label>
                <div className="relative">
                  <span className="inline-block w-full rounded-md shadow-sm">
                    <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-10 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                      <span className="block truncate">{tailleEnCours}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                  </span>

                  <Transition
                    show={open}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                  >
                    <Listbox.Options
                      static
                      className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                    >
                      {toutesLesTailles.map((taille) => (
                        <Listbox.Option key={taille.id} value={taille.taille}>
                          {({ selected, active }) => (
                            <div
                              className={`${
                                active
                                  ? "text-white bg-blue-600"
                                  : "text-gray-900"
                              } cursor-default select-none relative py-2 pl-10 pr-10`}
                            >
                              <span
                                className={`${
                                  selected ? "font-semibold" : "font-normal"
                                } block truncate`}
                              >
                                {taille.taille}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>

      {/* Affichez d'autres détails de la sneaker... */}
    </div>
  );
};

export default ProductPage;
