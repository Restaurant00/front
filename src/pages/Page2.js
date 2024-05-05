import React from "react";
import '../Components/ChosenPlates.css'
import background from '../assests/backgroung.jpeg';
import design from '../assests/design.png'
import arrow from '../assests/tabler_arrow-up.png'
import cardIcon from '../assests/card icon.png'
import OrdersPlacement from "../Components/OrdersPlacement";
import ChosenPlates from "../Components/ChosenPlates";

export default function Page2() {
    return(
        <div>
            <div className="container">
            {/* <img src={background} alt="background" className="Main--background--img"/> */}
            <div className="overlay"></div> {/*add overlay on top of the background image */}
            <p className="text2">Vous pouvez modifier votre commande ici .Une fois vos modifications terminées, vous devrez confirmer votre commande en cliquant sur "Paiement".</p>
            </div>
            <img src={design} alt="design" className="Main--design"/>
            <img src={arrow} alt="arrow" className="Main--arrow"/>
            <h1 className="Main--text1">VOTRE COMMANDE</h1>
            <img src={cardIcon} alt="cardIcon" className="Main--cardIcon"/>
            <div alt="commanderAutre" className="Main--commanderAutre"></div>
            <h3 className="Main--commanderAutre--text">Ajouter une autre chose</h3>
            <div alt="valider" className="Main--valider"></div>
            <h3 className="Main--valider--text">Commander</h3>
            <OrdersPlacement/>
        </div>
    )
}