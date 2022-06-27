import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  const [items, setitem] = React.useState([]);
  
      React.useEffect(() => {
        fetch(`http://localhost:8080/products`)
          .then((res) => res.json())
          .then((res) => setusers(res.data));
      }, []);
  return (
    <div>
      <h1>users listing page</h1>
      {items?.map((user) => (
        <p key={user.id}>{user.id}</p>
      ))}
    </div>
  )
}

export default App;
