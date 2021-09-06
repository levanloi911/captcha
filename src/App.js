import './App.css';
import React, { useEffect } from 'react'

import ReCAPTCHA from "react-google-recaptcha";
function App() {
  useEffect(()=>{
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  })
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6LcD6EkcAAAAAGXa5wcYteTI397xrJ8gMFvkUXN5"
        onChange={onChange}
      />
    </div>
  );
}

export default App;
