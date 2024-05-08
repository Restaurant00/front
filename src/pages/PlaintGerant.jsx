import React, { useEffect } from 'react'
import  { useState } from 'react'
import "./PlaintGerant.css"
import "./PlaintClient.css"
import axios from 'axios';


function PlaintGerant() {
    const [plaint , setPlaint] = useState({tableNum: "" , text : ""}) ;
    useEffect(() => {
        (async () => {
            const response = await axios.get("/plaintes") ; 
            // const data = response.data ; 
        })() ;
    } , [])
    const [reviews, setReviews] = useState([
        { id: 1, tableNum: "1", text: "Great service, loved the food!" },
        { id: 2, tableNum: "2", text: "Nice atmosphere, will come again." },
        { id: 3, tableNum: "3", text: "Excellent staff, very friendly." }
      ]);
    
      const removeReview = (id) => {
        const updatedReviews = reviews.filter(review => review.id !== id);
        setReviews(updatedReviews);
      };


      
      return (
    <div className='container'>
        <h1 className='title'>
        Les plaintes
        </h1>
        <div className='plaints-wrapper'>
            {reviews.map((el) => {
                return (
                 <div className="plaint-box" key={el.id}>
                    <img src='src/assets/PlainteGerantBinIcon.png' className='img' onClick={() => removeReview(el.id)}/>
                 <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"  , gap : "45px"}}>
                     <img src="src/assets/plainteClientIcon.png" alt="" />
                     <div style={{position : "relative"  }}>
     
                     <input type='text' value={"N° de la table : " + el.tableNum} className='tre' />
                         
                     </div>
                 </div>
                 <div>
                 
                 <textarea rows="4" cols="50" value={el.text } className='plaint-input' placeholder="Description de la plainte..." onChange={(e) => setPlaint({...plaint , text : e.target.value})}></textarea>
     
                 </div>
             </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default PlaintGerant
