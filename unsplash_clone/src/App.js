
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home';

import Stats from './components/stats'
import Photos from './components/photos'
import Collection from './components/collection'

import Likes from './components/likes';
import Edi from './components/editprofilepage';
import Hiring from './components/hiring';
import Edit_email from './components/emalset';
import Application from './components/Aplication'
import Close_ac from './components/closeac';
import Pass from './components/password';
import Connect from './components/connect';
import MainEdit from './components/editmain';

function App() {
  
  return (
    <BrowserRouter> 
          <Routes>
        <Route path="/" element={<Home />}>
         
          <Route index  element={<Photos/>}/>
          <Route path='likes'  element={<Likes/>}/>
          <Route path='col' element={<Collection/>}/>
          <Route path='stats'  element={<Stats/>}/>
          
        </Route>
        <Route path='edit' element={<Edi/>} >

<Route index element={<MainEdit/> } />
<Route path='/edit/app' element={<Application /> } />
<Route path='/edit/hiring' element={<Hiring  />} />
<Route path='/edit/email' element={<Edit_email  />} />
<Route path='/edit/close' element={<Close_ac />} />  
<Route path='/edit/pass' element={<Pass />} />  
      </Route>
<Route path='/connect' element={<Connect />} />  

      </Routes>
</BrowserRouter>

  );
}

export default App;
