import { useState } from 'react';
import GetInput from './GetInput';
import List from './List';
import "./styles.css"

function App() {
  const [todos, setTodos] = useState([]);

  return (

    <div className='wrapper'>
      <header className='heading'>
        <h1>Todo-list</h1>
      </header>
      <div className='inputarea'>
        <GetInput todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>

  );
}

export default App;
