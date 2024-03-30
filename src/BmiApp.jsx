import React, { useState } from "react";

function BmiApp() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");
  let calcbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter the valid value");
      setmessage("");
      return;
    } else {
      let bmi = (weight / (height * height)) * 703;
      setbmi(bmi.toFixed(1));
    }
    //logic to display message based on bmi
    if (bmi < 18 && bmi > 0) {
      setmessage("you have under weight buddy!Gain some weight 🍓🍊");
    } else if (bmi >= 18 && bmi < 25) {
      setmessage("You have a good weight buddy! 💪");
    } else if (bmi >= 25 && bmi < 30) {
      setmessage("You have overweight buddy!Lose some weight🚴");
    } else {
      setmessage("!!!Obesity,consult with a healthcare professiona");
    }
  };
  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <h1>BMI Form</h1>
        <form onSubmit={calcbmi}>
          <div>
            <label htmlFor="weight">weight(lbs)</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">height(in)</label>
            <input
              type="number"
              value={height}
              placeholder="Enter your height"
              onChange={(e) => setheight(e.target.value)}
            />
          </div>

          <div>
            <button onClick={calcbmi}>Calculate BMI:{bmi}</button>
            <button type="submit">submit</button>
            <button onClick={reload}>Reload</button>
          </div>
          <div>
            <h1>{message}</h1>
          </div>
        </form>
      </div>
    </>
  );
}

export default BmiApp;
