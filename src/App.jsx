import React from 'react';
import './Components/container.css';
import Navbar from './Components/Navbar';
import Main from './Components/Package';

function App() {

  const menuItems = ["Menu", "À propos", "Offres et promotions"];
  const title = "VOTRE COMMANDE";
  const description = "Vous pouvez modifier votre commande ici. Une fois vos modifications terminées, vous devrez confirmer votre commande en cliquant sur 'Paiement'.";

fetch('/api/updateAmountAndLevel', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  // Extrayez le nouvel "amount" de la réponse
  const userpoints = data.amount-200;
  // Vous pouvez maintenant utiliser le nouvel "amount" dans votre code front-end
  
})
.catch(error => {
  console.error('Error updating amount:', error);
});
  
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
