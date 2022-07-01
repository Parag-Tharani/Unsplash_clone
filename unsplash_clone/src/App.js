
import './App.css';
import { Navbar } from "../src/components/Navbar/Navbar"
import { Route, Routes } from 'react-router';
import { SignUp } from './components/Auth/Signup';
import { LogIn } from './components/Auth/Login';
import { Blog } from "./Pages/Blog";

function App() {
  return (
    <div className="App">
    <Blog />
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/' element={""}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
         <Route path='/blog' element={<Blog/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
