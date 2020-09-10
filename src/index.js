import React, {useState} from "react";
import Emitter from "./emitter";

function Index() {
  const [deck, setDeck] = useState([]);
  const addNotification = (event) => {
    setDeck([
      ...deck, 
      {
        timestamp: +new Date(),
        type: event.type || 'info',
        text: event.text || 'Notification'
      }
    ])
  }

  Emitter.subscribe('add', (event) => addNotification(event));

  return (
    <ul>
      {deck.map((item, i) => (
        <li key={item.timestamp} style={{backgroundColor: "#00f2"}}>{item.text}</li>
      ))}
    </ul>
  );
}

export function TestDispatcher() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Emitter.dispatch('add', {type: 'error', text: inputValue})
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h2>Test dispatcher</h2>
      <fieldset>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button type="submit">send</button>
      </fieldset>
    </form>
  );
}

export default Index;