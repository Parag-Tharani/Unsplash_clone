import './App.css';
import {Routes, Route} from "react-router-dom";
import { Inputform } from './Components/Advertise/Inputform';
import {Advertise} from "./Components/Advertise/Advertise";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Inputform" element={<Inputform />}></Route>
        <Route path="/" element={<Advertise />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
