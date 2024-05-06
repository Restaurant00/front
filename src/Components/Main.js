import React from "react";
import background from '../Assets/backgroung.jpeg';
import design from '../Assets/design.png'
import crown from "../Assets/crown.png"
import lock from "../Assets/lock.png"
import discountIcon from "../Assets/discountIcon.png"
import ProgressBar from "./ProgressBar";
import PackageCard from "./PackageCard";
export default function Main({userPoints, title, description}) {
    const packages = [
        {percentage:4,
             name:"Basic" ,
             points:3000,
              
        },
        {percentage:10,
            name:"Gold" ,
            points:8000,
             
       },
       {percentage:20,
        name:"N7ass" ,
        points:10000,
         
   }
    ]
    return(
        <div className="mainContentPackages">
        {/* <div>
            <div className="container">
            <img src={background} alt="background" className="Main--background--img"/> 
            <div className="overlay"></div> add overlay on top of the background image
            </div>
            <img src={design} alt="design" className="Main--design"/>
            <h1 className="Main--text1">LES OFFRES ET PROMOTIONS !</h1>
            <p className="text">En accumulant davantage de pièces, vous avancerez vers un niveau supérieur, débloquant ainsi de nouvelles réductions sur le prix total. Mais ce n'est pas tout ! Cette offre passionnante sera renouvelée chaque année, vous offrant toujours plus d'avantages.</p>
            <div>
                <div className="rectangle1"></div>
                <div className="rectangle11"></div>
                <img src={crown} className="crown1" alt="crown1"/>
                <div className="rectangle111" alt="rectangle111"></div>
                <img src={discountIcon} className="discount--icon1" alt="discount--icon1"/>
                <h3 className="discount1" alt="discount1">4%</h3>
                <h3 className="discount--text1" alt="discount--text1">Niveau basic 500 pièces</h3>
            </div> 

            <div>
                <div className="rectangle2"></div>
                <div className="rectangle12"></div>
                <div className="overlay2"></div>
                <div className="overlay22"></div>
                <img src={crown} className="crown2" alt="crown2"/>
                <img src={lock} className="lock2" alt="lock2"/>
                <div className="rectangle222" alt="rectangle222"></div>
                <img src={discountIcon} className="discount--icon2" alt="discount--icon2"/>
                <h3 className="discount2" alt="discount2">8%</h3>
                <h3 className="discount--text2" alt="discount--text2">Niveau silver 1000 pièces</h3>
            </div>
            
            <div>
                <div className="rectangle3"></div>
                <div className="rectangle13"></div>
                <div className="overlay3"></div>
                <div className="overlay33"></div>
                <img src={crown} className="crown3" alt="crown3"/>
                <img src={lock} className="lock3" alt="lock3"/>
                <div className="rectangle333" alt="rectangle333"></div>
                <img src={discountIcon} className="discount--icon3" alt="discount--icon3"/>
                <h3 className="discount3" alt="discount3">15%</h3>
                <h3 className="discount--text3" alt="discount--text3">Niveau golden 2500 pièces</h3>
            </div>

            <div>
                <div className="rectangle4"></div>
                <div className="rectangle14"></div>
                <div className="overlay4"></div>
                <div className="overlay44"></div>
                <img src={crown} className="crown4" alt="crown4"/>
                <img src={lock} className="lock4" alt="lock4"/>
                <div className="rectangle444" alt="rectangle444"></div>
                <img src={discountIcon} className="discount--icon4" alt="discount--icon4"/>
                <h3 className="discount4" alt="discount4">30%</h3>
                <h3 className="discount--text4" alt="discount--text4">Niveau platinum 5000 pièces</h3>
            </div>

            <div>
                <div className="rectangle5"></div>
                <div className="rectangle15"></div>
                <div className="overlay5"></div>
                <div className="overlay55"></div>
                <img src={crown} className="crown5" alt="crown5"/>
                <img src={lock} className="lock5" alt="lock5"/>
                <div className="rectangle555" alt="rectangle555"></div>
                <img src={discountIcon} className="discount--icon5" alt="discount--icon5"/>
                <h3 className="discount5" alt="discount5">50%</h3>
                <h3 className="discount--text5" alt="discount--text5">Niveau diamond 9000 pièces</h3>
            </div>
        </div> */}
        <div className="contentPackages">

        <h1 className="Main--text">LES OFFRES ET PROMOTIONS !</h1>
        <p className="text">En accumulant davantage de pièces, vous avancerez vers un niveau supérieur, débloquant ainsi de nouvelles réductions sur le prix total. Mais ce n'est pas tout ! Cette offre passionnante sera renouvelée chaque année, vous offrant toujours plus d'avantages.</p>
        <ProgressBar userPoints={userPoints}/>
        
        </div>
            
        <div className="packages">
        {
            packages.map((e, ind) => {
                return (
                    <PackageCard key={ind} percentage={e.percentage} name={e.name} points={e.points} userPoints={userPoints} />
                )
            })
        }
        </div>
        </div>
    )
}