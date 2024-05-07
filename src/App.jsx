import React from 'react';
import './Components/container.css';
import Navbar from './Components/Navbar';
import Main from './Components/Package';

function App() {
  const menuItems = ["Menu", "À propos", "Offres et promotions"];
  const title = "VOTRE COMMANDE";
  const description = "Vous pouvez modifier votre commande ici. Une fois vos modifications terminées, vous devrez confirmer votre commande en cliquant sur 'Paiement'.";

  const userPoints = 5000;
  
  return (
    <div className="tabletContainer">
      <div>
        <Navbar menuItems={menuItems} />
        <Main title={title} description={description} userPoints={userPoints} />

      </div>
    </div>
  );
}

export default App;
