import React, { useEffect, useState } from 'react';


import Todo from "./components/todo";


import { addTodo, getAllTodo, updateTodo, deleteTodo } from './utils/handleapi.js';




function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState('');

  // Fetch all todos when the component mounts
  useEffect(() => {
    getAllTodo(setTodos);
  }, []);

  // Function to handle updating mode
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add todos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(todoId, text, setTodos, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodos)
            }
          >
            {isUpdating ? 'Update' : 'Add'}
          </div>
        </div>

        <div className="list">
          {todos.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodos)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
