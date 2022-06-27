import React from 'react';
import './App.css';

function App() {
  const [items, setitem] = React.useState([]);
 var index =1
function fetchdata(index) {
  fetch(`https://api.unsplash.com/search/photos?page=${index}&query=office&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8`)
    .then((res) => res.json())
    .then((res) => setitem(res.results));
}
  for ( index; index < 2; index++) {
    fetchdata(index)

    
  }
  
  return (
    <div className="App">
      {items?.map((item) => (
        <div key={item.id} className="card">
          <img src={item.urls.small} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
