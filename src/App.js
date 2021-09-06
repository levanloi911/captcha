import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
function App() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6Lf150kcAAAAADZGHcbcvjlozOYwY0eOoQge16Jy"
        onChange={onChange}
      />
    </div>
  );
}

export default App;
