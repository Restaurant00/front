import React from "react";
import ProgressBar from "./ProgressBar";
import PackageCard from "./PackageCard";
import "./Package.css"

export default function Package({userPoints, title, description}) {

    const packages = [
        {percentage:4,
             name:"Basic" ,
             points:500,
              
        },
        {percentage:10,
            name:"silver" ,
            points:1000,
             
       },
       {percentage:15,
        name:"golden" ,
        points:2500,     
    },
    {percentage:30,
        name:"platinium" ,
        points:5000,     
    },
    {percentage:50,
        name:"diamond" ,
        points:9000,     
    }
    ]

    return(
        <div className="mainContentPackages">
        <div className="contentPackages">

        <h1 className="Main--text">LES OFFRES ET PROMOTIONS !</h1>
        <p className="text">En accumulant davantage de pièces, vous avancerez vers un niveau supérieur, débloquant ainsi de nouvelles réductions sur le prix total. Mais ce n'est pas tout ! Cette offre passionnante sera renouvelée chaque année, vous offrant toujours plus d'avantages.</p>
        <ProgressBar userPoints={userPoints}/>
        
        </div>
            
        <div className="packages">
        {
    packages.map((e, ind) => {
        let background, shadow;
        switch (ind) {
            case 0:
                background = "linear-gradient(90deg, #DEDEEA 0%, #ECFAFF 26.83%, #DDEDFB 49.96%, #AFAFE6 87.06%, #98A7D2 100%)";
                shadow = "0px 4px 10px 0px rgba(0, 0, 0, 0.25)";
                break;
            case 1:
                background = "linear-gradient(90deg, #383838 0%, #858585 16.1%, #B8B8B8 29.6%, #828282 63.6%, #A0A0A0 80.1%, #FFFFFF 100%)";
                shadow = "0px 4px 10px 0px rgba(0, 0, 0, 0.25)";
                break;
            case 2:
                background = "linear-gradient(90deg, #EDD267 0%, #D2AC47 16.1%, #DEC25D 29.6%, #F7EF8A 63.6%, #E0CD6A 70.6%, #AE8625 92.1%)";
                shadow = "0px 4px 10px 0px rgba(0, 0, 0, 0.25)";
                break;
            case 3:
                background = "linear-gradient(90deg, #5B5B5B 0%, #A3A3A3 0.18%, #E8E8E8 15.14%, #E8E8E8 20.8%, #C6C6C6 49.65%, #F2F2F2 73.1%, #B5B5B5 86.88%, #9D9D9D 100%)";
                shadow = "0px 4px 10px 0px rgba(0, 0, 0, 0.25)";
                break;
            case 4:
                background = "linear-gradient(90deg, #F1F7FB 0%, #D9EBF4 25%, #CBE3F0 50%, #B8D8E7 75%, #9AC5DB 100%)";
                shadow = "0px 4px 10px 0px rgba(0, 0, 0, 0.25)";
                break;
            default:
                background = "#default_color_value";
                shadow = "#default_shadow_value";
                break;
        }
        return (
            <PackageCard key={ind} percentage={e.percentage} name={e.name} points={e.points} userPoints={userPoints} Background={background} Shadow={shadow} />
        )
    })
}

        </div>
        </div>
    )
}