
import './App.css';
import { Navbar } from "../src/Components/Navbar/Navbar"
import { Route, Routes } from 'react-router';
import { SignUp } from './Components/Auth/Signup';
import { LogIn } from './Components/Auth/Login';
import { Error } from './Components/Navbar/Error'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
