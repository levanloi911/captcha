import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
function App() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6LcO5UkcAAAAAIRasr3BSFzIx1OllvhNg-b9Gaf5"
        onChange={onChange}
      />
    </div>
  );
}

export default App;
