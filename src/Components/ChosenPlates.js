import React from "react";
import {useState } from "react";
import plate1 from '../assests/plate 1.png';
import bin from '../assests/trash.png';
import omit from '../assests/omit.png';

export default function ChosenPlates() {
    const [qty, setQty] = useState(0)
    const [comments, setComments] = useState({});
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
     
    //increase plates quantity
   function handleIncreaseQtyProduct() {
        const nextQty = qty + 1
        setQty(nextQty)
    }  

    //decrease plate quantity
    function handleDecreaseQtyProduct() {
        if (qty > 0) {
            const prevQty = qty - 1
            setQty(prevQty)
        }
    }

    // Function to handle adding a comment
    function handleAddComment(plateName, comment) {
        setComments((prevComments) => ({
            ...prevComments,
            [plateName]: comment,
        }));
    }

    // Function to handle deleting a comment
    function handleDeleteComment(plateName) {
        setIsVisible2(false);
        // Reset quantity and comments
        setComments({});
    }

    function handleDeletePlate() {
        setIsVisible(false);
        // Reset quantity and comments
        setQty(0);
        setComments({});
    }
const comment = (<input className="Main--comment"
                    type="text"
                    placeholder="Please, just a litlle bit spice...."
                    onChange={(e) => handleAddComment("Pizza Margherita", e.target.value)}
                />
)
const plate = (
    <div>
                <h2 className="Main--text3">Pizza Margherita</h2>
                <span className="Main--text31"> { 1500 * qty } DA </span>
                <div onClick={() => handleIncreaseQtyProduct()} className="Main--plus">+</div>
                <div onClick={() => handleDecreaseQtyProduct()} className="Main--minus">-</div>
                <span className="Main--quantity">{qty}</span>
                <div alt="quantity" className="Main--Quantity"></div>
                {/* Comment box */}
                <input className="Main--comment"
                    type="text"
                    placeholder="Please, just a litlle bit spice...."
                    onChange={(e) => handleAddComment("Pizza Margherita", e.target.value)}
                />
                {/* Delete comment button */}
                        <img
                            src={omit}
                            alt="omit"
                            className="Main--omit"
                            onClick={() => handleDeleteComment("Pizza Margherita")}
                        />
                
                <img
                    src={bin}
                    alt="bin"
                    className="Main--bin"
                    onClick={() => handleDeletePlate("Pizza Margherita")}
                />
                <div alt="bigRectangle" className="Main--bigRectangle1"></div>
                <img src={plate1} alt="orderedPlates" className="Main--plate1"/>
            </div>
)

    return (
        <>
            <p className="text2">Vous pouvez modifier votre commande ici .Une fois vos modifications terminées, vous devrez confirmer votre commande en cliquant sur "Paiement".</p>
            {isVisible && plate}
            {isVisible2 && comment}
            {/*<div>
                <div className="Main--plate1" style={{backgroundImage: `url(${productProps.urlImage})`}}  alt="OrderedPlates"></div>
                <span className="Main--text3">{productProps.name} </span>
                <span className="Main--text31">{`${productProps.devise} ${productProps.price * qty}`}</span>
                <div onClick={() => handleDecreaseQtyProduct(productProps)} className="Main--minus">-</div>
                <span className="Main--quantity">{qty}</span>
                <div onClick={() => handleIncreaseQtyProduct(productProps)} className="Main--plus">+</div>
            </div>*/}

        </>
    )
}