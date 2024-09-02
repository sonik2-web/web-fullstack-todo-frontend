import axios from 'axios';

const baseurl = "http://localhost:3000";

// Function to get all todos
const getAllTodo = (setTodos) => {
  axios
    .get(`${baseurl}`)
    .then(({ data }) => {
      console.log('data---> ', data);
      setTodos(data);
    })
    .catch((err) => console.log(err)); // Fixed syntax error
};

// Function to add a new todo
const addTodo = (text, setText, setTodos) => {
  axios
    .post(`${baseurl}/save`, { text }) // Fixed typo from 'anxios' to 'axios' and corrected template literal usage
    .then(({ data }) => {
      console.log(data);
      setText("");
      getAllTodo(setTodos);
    })
    .catch((err) => console.log(err)); // Fixed syntax error
};

// Function to update an existing todo
const updateTodo = (todoId, text, setTodos, setIsUpdating) => {
  axios
    .post(`${baseurl}/update`, { _id: todoId, text }) // Fixed typo and endpoint path
    .then(({ data }) => {
      console.log(data);
      setIsUpdating(false);
      getAllTodo(setTodos);
    })
    .catch((err) => console.log(err)); // Fixed syntax error
};

// Function to delete a todo
const deleteTodo = (todoId, settodos) => {
  axios
    .post(`${baseurl}/delete`, { _id: todoId }) // Fixed typo and endpoint path
    .then(({ data }) => {
      console.log(data);
      getAllTodo(setTodos);
    })
    .catch((err) => console.log(err)); // Fixed syntax error
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
