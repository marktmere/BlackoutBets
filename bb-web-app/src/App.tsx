import React from "react";
import "./styling/App.css";
import CurrentScreen from "./routes";
import {BrowserRouter} from "react-router-dom";
import AppNav from "./components/app/AppNav";

function App() {
  return (
    <div>
        <AppNav/>
        <BrowserRouter>
            <CurrentScreen/>
        </BrowserRouter>
    </div>
  );
}

export default App;
