import React from 'react'
import { VscAccount } from 'react-icons/vsc';
import { BsBagCheck } from 'react-icons/bs';

const Header = () => {
  return (
    // Header de la page permet d'afficher le nom de la boutique, les catégories, le compte et le panier
    <div className='header black p-4 flex justify-between items-center'> 
      <div className='SneakersShop text-2xl font-bold'>
        Sneakers Shop
      </div>
      <div className='Sneakers '>
          Sneakers
      </div>
      <div className='SinglesDay ml-4 hover:text-gray-300' style={{ cursor: 'pointer'}}>
        Single's Day
      </div>
      <div className='Livraison48h ml-4 hover:text-gray-300' style={{ cursor: 'pointer'}}>
          Livraison 48h
      </div>
      <div className='Compte ml-4 hover:text-gray-300' style={{ cursor: 'pointer'}}>
        <VscAccount />
      </div> 
      <div className='Panier ml-4 hover:text-gray-300' style={{ cursor: 'pointer'}}>
        <BsBagCheck />
      </div>  
    </div>
  )
}

export default Header