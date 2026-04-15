import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whethere dark mood is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        {/* Nav */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        {/* Alert */}
        <Alert alert={alert} />

        {/* Content */}
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
