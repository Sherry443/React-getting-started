
import React ,{ useState } from 'react';
import './App.css';

function App() {
  const [Count, setCount] = useState(0);
  function handleClick(){
    setCount(Count+1); 
  }

   function handleSubmit(){
      setCount(Count-1); 
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Count}</h1>
        <button onClick={handleClick}>+</button>
        <button onClick={handleSubmit}>-</button>
        <h1>hello world</h1>
      </header>
    </div>
  );
}

export default App;
