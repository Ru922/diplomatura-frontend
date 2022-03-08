import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
function App() {
const [userName, setUserName] = useState('Alex');

  return (
    <div className="app-container">
      <Main userName={userName}/>
      </div>
    
  );
}

export default App;
