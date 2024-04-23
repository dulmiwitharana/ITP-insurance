import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../cssFIle/Insurance.css";
import insuranceImage from "../images/p8.jpg";

export default function Insurancefirst() {
  const navigate = useNavigate();
  const [buttonStyle, setButtonStyle] = useState({});

  const handleHover = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: "#0056b3",
    });
  };

  return (
    <div className="body-wrapper">
    <div className="insurance-container">
      <div className="background-image"></div>
       {/* <img src="tour.jpg" alt="background-image" /> */}

      <div className="content-container">
        <h1 className="welcome-heading">
          Welcome to Travel Go Insurance Services
        </h1>
        <p className="welcome-text">
          Are you planning to jet set around the world? Before you pack your
          bags, get your travel insurance in order first. Did you know with a
          reliable insurance policy, you can be safeguarded against all
          unexpected events that might hinder your holiday? Continental
          Insurance provides you with an affordable, comprehensive travel
          insurance policy that will cover you in the event of flight delays,
          lost or delayed luggage, unforeseen medical emergencies, lost travel
          documents, Personal Accident Benefit and more. Leave your worries with
          us, enjoy your holiday.
        </p>
        <p className="welcome-text2">
          Travel Go Insurance also provides corporate travel solutions.
        </p>
        <div>
          <button
            className="get-insurance-btn"
            onClick={() => navigate("/pricing")}
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={() =>
              setButtonStyle((prevStyle) => ({
                ...prevStyle,
                
              }))
            }
          >
            Get Insurance
          </button>
          <button
            className="get-insurance-btn1"
            onClick={() => navigate("/dis")}
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={() =>
              setButtonStyle((prevStyle) => ({
                ...prevStyle,
               
              }))
            }
          >
            Tourist Details
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
