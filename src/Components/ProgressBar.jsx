import React, { useRef, useEffect, useState } from "react";
import progressBar1 from '../Assets/progressBar1.png';
import "./ProgressBar.css"

export default function ProgressBar ({userPoints=3000}) {
    const elemRef = useRef(null); // Create a ref
    const [maxWidth, setMaxWidth] = useState(0);

    useEffect (()=> {
        const newMaxWidth = (userPoints * 100) / 3300;
        setMaxWidth(newMaxWidth);

        let width = 1;

        const id = setInterval(() => {
            if (width >= maxWidth) {
                clearInterval(id);
            } else {
                width++;
                if (elemRef.current) {
                    elemRef.current.style.width = width + "%";
                }
            }
        }, 10);

        return () => clearInterval(id); // Cleanup function to clear the interval

    }, [userPoints, maxWidth]); // Include userPoints and maxWidth in the dependency array

    return(
        <div className="progressBarContainer">
            <div className="Points--display">{userPoints} / 3300</div>
            <div className="progressBarFill" style={{ width: `${maxWidth}%` }} ref={elemRef}></div>
            <img className="progressBar" alt="progressBar" src={progressBar1}/>
        </div>
    );
}
