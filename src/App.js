import { useEffect, useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";
import Customer from "./screen/Customer";
import Home from "./screen/Home";
import './style/app.css'



const DarkTheme = createContext()

function App() {
  let themeState = true
  if (localStorage.getItem('darkTheme') !== null) {
    themeState = JSON.parse(window.localStorage.getItem('darkTheme'))
  }
  const darkTheme = useState(themeState);
  useEffect(() => {
    switch (darkTheme[0]) {
      case true:
        document.body.classList.remove("my-light-theme");
        document.body.classList.add("my-dark-theme");
        break;
      case false:
        document.body.classList.remove("my-dark-theme");
        document.body.classList.add("my-light-theme");
        break;

      default:
        document.body.classList.add("my-dark-theme");
        break;
    }
    document.body.style.backgroundColor = darkTheme[0] ? "rgb(0, 30, 60)" : "#edf3f7"
    window.localStorage.setItem('darkTheme', darkTheme[0])
  }, [darkTheme[0]])



  return (
    <Router>
      <DarkTheme.Provider value={darkTheme}>
        <div>
          <DashboardWrapper>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/customers" element={<Customer />}></Route>
            </Routes >
          </DashboardWrapper>
        </div>
      </DarkTheme.Provider>
    </Router>
  );
}

export default App;
export { DarkTheme }
