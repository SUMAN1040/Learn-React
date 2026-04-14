import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      {/* <Navbar/> */}
      <div className="container my-5">
        <TextForm heading="Enter your text to analyze"/>
      </div>
    </>
  );
}

export default App;