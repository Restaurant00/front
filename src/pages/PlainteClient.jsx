import React, { useState } from 'react'
import "./PlaintClient.css"
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import axios from 'axios';
import { Link } from 'react-router-dom';



function PlainteClient() {
    const [plaint , setPlaint] = useState({tableNum: "" , text : ""}) ;
    console.log(plaint) ;
    const postPlaintRequest = async () => {
        const request = await axios.post("/addPlainte" , plaint) ;
        console.log(request)
    }
  return (
    <div className='container'>
        <h1 style={{display : "flex" , gap : "15px" , justifyContent : "center" , alignItems : "center" , fontSize : "40px" }}>
            <Link to={"/"} style={{color : "black"}}>
        <FaArrowLeft style={{lineHeight : "10px" , fontSize : "16px"}} />
        </Link>
        SERVICE CLIENTELE
        </h1>
        <p className='text'>
        Nous nous efforçons de vous offrir la meilleure expérience possible. Si vous rencontrez des problèmes lors de votre visite, veuillez nous en informer afin que nous puissions améliorer notre service.
        </p>
        <div className="plaint-box">
            <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"  , gap : "45px"}}>
                <img src="src/assets/plainteClientIcon.png" alt="" />
                <div style={{position : "relative"  }}>
                <IoIosArrowDown style={{position : "absolute" , right : "25px" , top : "12px" , color : "rgba(255, 185, 44, 1)"}} />

                <select name="table" id="tables" onChange={(e) => setPlaint({...plaint , tableNum : e.target.value})} >
                <option value="" className='tre'>N° de la table</option>
                    <option value="table-1">table 1</option>
                    <option value="table-2">table 2</option>
                    <option value="table-3">table 3</option>
                    <option value="table-4">table 4</option>
                    <option value="table-5">table 5</option>
                    <option value="table-6">table 6</option>
                    <option value="table-7">table 7</option>
                    <option value="table-8">table 8</option>

                </select>
                </div>
            </div>
            <div>
            
            <textarea rows="4" cols="50" value={plaint.Desc } className='plaint-input' placeholder="Description de la plainte..." onChange={(e) => setPlaint({...plaint , text : e.target.value})}></textarea>

            </div>
        </div>
        <button className='btn' onClick={postPlaintRequest}>
            Envoyer votre avis
        </button>
    </div>
  )
}

export default PlainteClient
