import React, { useRef, useEffect } from "react";
import progressBar1 from '../Assets/progressBar1.png';

export default function ProgressBar ({userPoints=3000}) {
    const elemRef = useRef(null); // Create a ref
    useEffect (()=> {
        const maxWidth = (userPoints * 100) / 9000
        var i = 0;
    
        if (i === 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= maxWidth) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    if (elemRef.current) { // Check if the ref has been assigned
                        elemRef.current.style.width = width + "%"; // Access the DOM element using the ref and set its width
                    }
                }
            }
        }
    //     setTimeout(()=> {
    //         if (elemRef.current) { // Check if the ref has been assigned
    //             elemRef.current.style.width =(userPoints * 100) / 9000 + "%"; // Access the DOM element using the ref and set its width
    // }
    //     }, 200)
       
    }, [])

    return(
        <div className="progressBarContainer">
            <div className="progressBarFill" ref={elemRef}></div> {/* Assign the ref to the div */}
            <img className="progressBar" alt="progressBar" src={progressBar1}/>
        </div>
    );
}
