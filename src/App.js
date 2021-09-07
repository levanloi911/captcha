import './App.css'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useCallback } from 'react';
const TEST_SITE_KEY = "6Ld2yEocAAAAANcNuNcuhOf-qqRTBuPBgjd6aLJD";
const TEST_SITE_KEYV2 = "6LcJIU0cAAAAAIUOF15QdaSUTeyL2VZ2ln3l7QcN";
const recaptchaRef = React.createRef();
const ReComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleSubmit = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    }
    console.log('Execute recaptcha sucess');
    const token = await executeRecaptcha();
    // Do whatever you want with the token
    console.log(token);
  }, []);
  return (
    <div>
      <GoogleReCaptcha onVerify={token => console.log('token V3:',{ token })} />
      <button onClick={handleSubmit}>Submit v3</button>
    </div>
  );
};

const App = () => {

  function onChange(value){
    console.log("Captcha value v2:", value);
       if (!value) {
      console.log('Execute recaptcha not yet available');
    }
    // if value is null recaptcha expired
    if (value === null) console.log(' recaptcha expired');
  };
  return (
    <div>
      <GoogleReCaptchaProvider
        language="es-AR"
        reCaptchaKey={TEST_SITE_KEY}
      >
        <ReComponent />
      </GoogleReCaptchaProvider>

      {/* //recaptcha v2 */}
       <ReCAPTCHA
       language='es-AR'
        ref={recaptchaRef}
        sitekey={TEST_SITE_KEYV2}
        onChange={onChange}
      />
    </div>
   
    
  );
};

export default App;

