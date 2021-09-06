import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
function App() {
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
