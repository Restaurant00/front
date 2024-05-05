import * as React from "react";
import {useState } from "react";
import rectangle7 from './Rectangle 7.png';
import serviceClientIcon from './serviceClientIcon.png';

const Button = ({ children }) => (
  <button className="button">{children}</button>
);

function ServiceClientele() {

  // State variables to store selected values of each dropdown menu
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  // Function to handle option selection for the first dropdown menu
  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  // Function to handle option selection for the second dropdown menu
  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

    // State variable to store the comment
    const [comment, setComment] = useState("");
  
    // Function to handle comment input change


  const ComplaintForm = () => (
    <>
      <img src={rectangle7} className="rectangle7"/>
      
      <textarea rows="4" cols="50" className="description--plainte" placeholder="Descreption de la plainte..." >
      </textarea>

      <select className="numero--table" value={selectedOption1} onChange={handleOptionChange1}>
        <option value="">N° de la table</option>
        <option value="1">Table 1</option>
        <option value="2">Table 2</option>
        <option value="3">Table 3</option>
        {/* Add more <option> elements for additional table numbers */}
      </select>
      <select className="type--plainte" value={selectedOption2} onChange={handleOptionChange2}>
        <option value="">Type de plainte</option>
        <option value="plainte1">Plainte 1</option>
        <option value="plainte2">Plainte 2</option>
        <option value="plainte3">Plainte 3</option>
        {/* Add more <option> elements for additional complaint types */}
      </select>
    </>
  );


  return (
    <>
          <img
            src={serviceClientIcon}
            alt="Customer service icon"
            className="title-icon"
          />
          <p className="section-description">
            Nous nous efforçons de vous offrir la meilleure expérience
            possible. Si vous rencontrez des problèmes lors de votre visite,
            veuillez nous en informer afin que nous puissions améliorer notre
            service.
          </p>
          <div className="complaint-section">
              <ComplaintForm />
              <div className="attachment-icon" />
          </div>
          <button className='submitButton'>Envoyer la plainte</button>
  </>
  );
}

export default ServiceClientele;