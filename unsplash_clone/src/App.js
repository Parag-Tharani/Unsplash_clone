import './App.css';
import {Routes, Route} from "react-router-dom";
import { Inputform } from './Components/Advertise/Inputform';
import {Advertise} from "./Pages/Advertise";
import {SuccessForm} from "./Components/Advertise/SuccessForm";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Inputform" element={<Inputform />}></Route>
        <Route path="/" element={<Advertise />}> </Route>
        <Route path="/SuccessForm" element={<SuccessForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
