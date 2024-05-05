import React, { useRef } from "react";
import progressBar1 from './progressBar1.png';

export default function ProgressBar () {
    const elemRef = useRef(null); // Create a ref

    var i = 0;

    if (i === 0) {
        i = 1;
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                if (elemRef.current) { // Check if the ref has been assigned
                    elemRef.current.style.width = width + "px"; // Access the DOM element using the ref and set its width
                }
            }
        }
    }

    return(
        <div>
            <div className="progressBarFill" ref={elemRef}></div> {/* Assign the ref to the div */}
            <img className="progressBar" alt="progressBar" src={progressBar1}/>
        </div>
    );
}
