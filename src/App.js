import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Captcha from "demos-react-captcha";
import './App.css'
const TEST_SITE_KEY = "6Lcg-EkcAAAAAIec-J_yxziH3okfLvqbYlkICNQT";
const DELAY = 1500;

function App () {
 
  function onChange(value) {
    console.log('inputcaptcha:',value);
  }
    return (
      <div className="App">
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            // ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            // onChange={this.handleChange}
            // asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        <Captcha
          style={{ display: "inline-block" }}
          onChange={onChange}
          placeholder="Enter captcha" // optional
          length={6} // defaultn
        />

      </div>
    );
  
}




export default App;
