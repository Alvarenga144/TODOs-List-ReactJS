import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';


const todos = [
  { text: 'Job interview for Frontend Developer', completed: true },
  { text: 'Wash the dishes and clean the house', completed: true },
  { text: 'Shower the dogs', completed: false },
  { text: 'Make the lunch for Andrea', completed: false },
  { text: 'Take photos for Linkedin profile', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
