
import './App.css';

function App() {
  const [items, setitem] = React.useState([]);

function fetchdata() {
  fetch(`http://localhost:8080/products`)
    .then((res) => res.json())
    .then((res) => setitem(res.results));
}
  for (let index = 0; index < 3; index++) {
    
    
  }
  
  return (
    <div className="App">
      {items?.map((item) => (
        <div key={item.id} className="card">
          <h4>Product {item.id}</h4>
          
        </div>
      ))}
    </div>
  );
}

export default App;
