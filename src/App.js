// App.js
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Page2 from './pages/Page2';
import ChosenPlates from './Components/ChosenPlates';

function App() {
  const menuItems = ["Menu", "À propos", "Offres et promotions"];
  const title = "VOTRE COMMANDE";
  const description = "Vous pouvez modifier votre commande ici. Une fois vos modifications terminées, vous devrez confirmer votre commande en cliquant sur 'Paiement'.";

  return (
    <div className="Container">
        <NavBar menuItems={menuItems} />
        <Page2 title={title} description={description} />
        <ChosenPlates/>
    </div>
  );
}

export default App;
