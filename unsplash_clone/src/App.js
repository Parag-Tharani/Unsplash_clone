
import './App.css';
import { Navbar } from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router';
import { SignUp } from './Components/Auth/Signup';
import { LogIn } from './Components/Auth/Login';
import { Blog } from "./Pages/Blog";
import { Inputform } from './Components/Advertise/Inputform';
import {Advertise} from "./Pages/Advertise";
import { SuccessForm } from "./Components/Advertise/SuccessForm";

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      {/* <Blog /> */}
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/" element={""}></Route>
      </Routes>
      <Routes>
        <Route path="/Inputform" element={<Inputform />}></Route>
        <Route path="/advertise" element={<Advertise />}>
        </Route>
        <Route path="/SuccessForm" element={<SuccessForm />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
