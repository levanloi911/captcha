import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
function App() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="Your client site key"
        onChange={onChange}
      />
    </div>
  );
}

export default App;
