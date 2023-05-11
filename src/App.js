import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClap = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <div className="card-body">
        <h2>Clap Button</h2>
        <div className="counter">{count}</div>
        <button className="btn btn-success mx-3 btn-large" onClick={handleClap}>
          <FontAwesomeIcon icon={faHandsClapping} />
        </button>
        
      </div>
    </div>
  );
}

export default App;

