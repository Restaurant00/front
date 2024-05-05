import React from "react";
import background from './backgroung.jpeg';
import design from './design.png'
import arrow from './tabler_arrow-up.png'
import payButton from './button pay.png'
import bigRectangle from './big rectangle.png';
import plate1 from './plate 1.png';
import plate2 from './plate 2.png';
import plate3 from './plate 3.png';
import plate4 from './plate 4.png';
import plate5 from './plate 5.png';
import plate6 from './plate 6.png';



export default function Main() {
    return(
        <div>
            <img src={background} alt="background" className="Main--background--img"/>
            <img src={design} alt="design" className="Main--design"/>
            <img src={arrow} alt="arrow" className="Main--arrow"/>
            <img src={payButton} alt="payButton" className="Main--payButton"/>
            <h1 className="Main--text1">VOTRE COMMANDE</h1>
            <h2 className="Main--text2">Votre commande arrive bientôt. Veuillez patienter</h2>
            <img src={bigRectangle} alt="bigRectangle" className="Main--bigRectangle1"/>
            <img src={bigRectangle} alt="bigRectangle" className="Main--bigRectangle2"/>
            <img src={bigRectangle} alt="bigRectangle" className="Main--bigRectangle3"/>
            <img src={bigRectangle} alt="bigRectangle" className="Main--bigRectangle4"/>
            <img src={bigRectangle} alt="bigRectangle" className="Main--bigRectangle5"/>
            <img src={bigRectangle} alt="bigRectangle" className="Main--bigRectangle6"/>
            <img src={plate1} alt="plate1" className="Main--plate1"/>
            <img src={plate2} alt="plate2" className="Main--plate2"/>
            <img src={plate3} alt="plate3" className="Main--plate3"/>
            <img src={plate4} alt="plate4" className="Main--plate4"/>
            <img src={plate5} alt="plate5" className="Main--plate5"/>
            <img src={plate6} alt="plate6" className="Main--plate6"/>
            <h2 className="Main--text3">Pizza Margherita</h2>
            <h3 className="Main--text31">1500 DA</h3>
            <h2 className="Main--text4">Pizza Margherita</h2>
            <h3 className="Main--text41">1500 DA</h3>
            <h2 className="Main--text5">Pizza Margherita</h2>
            <h3 className="Main--text51">1500 DA</h3>
            <h2 className="Main--text6">Pizza Margherita</h2>
            <h3 className="Main--text61">1500 DA</h3>
            <h2 className="Main--text7">Pizza Margherita</h2>
            <h3 className="Main--text71">1500 DA</h3>
            <h2 className="Main--text8">Pizza Margherita</h2>
            <h3 className="Main--text81">1500 DA</h3>


        </div>
    )
}