import React from 'react'
import './App.css';

function App() {
  const text = "luka",
  myNumber = 123,
  myArray = [1,2,3],
  myObject = {name: "Marko", job: "developer"};
  return (
    <div style = {{backgroundColor: "red"}}>
      <ul>
      <li>text</li>
      <li>myNumber</li>
      <li>myArray</li>
      <li>Name: {myObject.name}</li>
      </ul>
    </div>
  );
}

export default App;
