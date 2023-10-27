import React, { useState } from 'react';
import "./App"
import "./styles.css"
function GetInput({ todos, setTodos }) {
  const [input, setInput] = useState("")
  const timestamp = new Date();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { id: timestamp.getTime(), task: input, status: false };
    setTodos([...todos, obj]);
    setInput("");
  };

  return (
    <form name="inputform" className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's the task?"
        value={input}
        onChange={handleInput}
        name="inputfield"
        required
        autoFocus
      />
      <button type="submit">
        ADD TASK
      </button>
    </form>
  );
}

export default GetInput;
