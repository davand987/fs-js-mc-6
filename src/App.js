
import './App.css';
import MyComponent from './grejor/mycomponents';
import Greeting from './grejor/greeting';
import Counter from './grejor/counter';
import Clock from './grejor/clock';
import NameForm from './grejor/formular';
import { useState } from 'react';

function App() {
  const [greetingName, setGreetingName] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("");


  return (
    <div className="App">
      <Greeting name={greetingName} message={greetingMessage} />
      <NameForm onSubmit={(name, message) => {
        setGreetingName(name)
        setGreetingMessage(message)}}/>


    </div>
  );
}

export default App;
