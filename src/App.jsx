import { useState } from 'react';
import './App.css'
import XIcon from './assets/x.svg'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = () => {
    const input = document.getElementById('todo');
    let inputValue = input.value;
    if (inputValue) {
      setTodo((prev) => [
        ...prev,
        { value: inputValue, ID: crypto.randomUUID() },
      ]);
    }
    input.value = ''
  }
  const remove = index => {
    const newIndex = [...todo];
    newIndex.splice(index, 1)
    setTodo(newIndex);
  }
  const addTodoWithEnterKey = (e) => {
    if (e.key === 'Enter') {
      addTodo()      
    }
  }
  return (
    <>
    <div className="container">
      <section className="todo-list">
        <h1>To-Do List</h1>
      </section>
      <section className="add-todo">
        <input type="text" placeholder='Make dinner...' id="todo" onKeyDown={addTodoWithEnterKey} onChange={addTodoWithEnterKey} />
        <button onClick={addTodo}>Add</button>
      </section>
      <section className="list">
        <ul>
          {todo.map((element, i) => {
            return (<>
            <div>
            <li key={element.ID}>{element.value}</li>
            <button onClick={() => remove(i)}><img src={XIcon} alt="x button" /></button>
            </div>
            </>)
          })}
        </ul>
      </section>
    </div>
    <div className="attribute">
      <p>Project by <a href="https://github.com/JunLovin" target="_blank">JunLovin</a></p>
    </div>
    </>
  )
}

export default App