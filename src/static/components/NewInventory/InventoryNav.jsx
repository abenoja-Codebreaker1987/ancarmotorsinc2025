import React from 'react';
import './InventoryNav.css';
import InventoryHeader from './InventoryHeader';
import Footer from '../Footer';
import TruckOrderForm from './TruckOrderForm';
const InventoryNav = () => {
  return (
    <div className="InventoryNavContainer">
      
        <InventoryHeader />
        <Footer />
    </div>
  );
}

export default InventoryNav;