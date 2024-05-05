// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import ProgressBar from './Components/ProgressBar';
function App() {
  const menuItems = ["Menu", "À propos", "Offres et promotions"];
  const title = "VOTRE COMMANDE";
  const description = "Vous pouvez modifier votre commande ici. Une fois vos modifications terminées, vous devrez confirmer votre commande en cliquant sur 'Paiement'.";

  return (
    <div className="Container">
        <Navbar menuItems={menuItems} />
        <Main title={title} description={description} />
        <ProgressBar/>
    </div>
  );
}

export default App;
