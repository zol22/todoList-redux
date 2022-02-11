import { Container} from '@mui/material';
import React  from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


function App() {

  return (
    <Container maxWidth="sm">
        <h1>Redux List App</h1>
        <AddTodo />
        <TodoList />
     </Container>
  );
}

export default App;
