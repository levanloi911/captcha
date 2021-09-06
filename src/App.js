import './App.css'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";
import { useCallback } from 'react';
const TEST_SITE_KEY = "6Ld2yEocAAAAANcNuNcuhOf-qqRTBuPBgjd6aLJD";

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
      <GoogleReCaptcha onVerify={token => console.log({ token })} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const App = () => {
  return (
    <GoogleReCaptchaProvider
      language="es-AR"
      reCaptchaKey={TEST_SITE_KEY}
    >
      <ReComponent />
    </GoogleReCaptchaProvider>
  );
};

export default App;

