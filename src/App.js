import React, {useState} from "react";
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])
  

  function addItem(){

    if(!newItem){
      alert("Enter an Item")
      return;
    }

    const item = {
      id : Math.floor(Math.random() * 1000),
      value : newItem
    }

    setItems((prevItems) => [...prevItems, item] )
    setNewItem("")
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id )
    setItems(newArray)
  }

 

  return (
    <div className="App">

     {/* Header */}
     <h1>To Do List App</h1>

     {/* Input */}
     <input onChange={e => setNewItem(e.target.value)} value={newItem} placeholder='Add an Item' />
     <button onClick={() => addItem()}>Add</button>


     {/* List of Items */}
     <ul>
     {items.map(item => {
      return (
        <li key = {item.id}>{item.value}<button className="delete-button" onClick={() => deleteItem(item.id)}>❌</button></li>
      )
     })}
     </ul>




    </div>
  );
}

export default App;
