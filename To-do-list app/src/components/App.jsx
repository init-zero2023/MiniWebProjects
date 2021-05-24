import React, { useState } from "react";
// import Listelement from "./Listelement";

function App() {

  const [elements, add] = useState([]);
  const [inputText, setInputText] = useState("");

  function addElement(event){
    // console.log(elements)
    add(prevItems=> [...prevItems, inputText]);

    setInputText("");
    // event.preventDefault();
  };

  function handleInput(event){
    const newvalue = event.target.value;
    // console.log(newvalue)
    setInputText(newvalue);
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" placeholder="Enter a value" value={inputText}/>
        <button onClick={addElement}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {elements.map( todoList=> <li>{todoList}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
