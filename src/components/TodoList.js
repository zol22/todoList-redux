import React from 'react'
import { useSelector } from 'react-redux';
import { List } from '@mui/material';

import { selectTodos } from '../features/todoSlice';
import TodoItem from './TodoItem';



function TodoList() {

    const todos = useSelector(selectTodos);

  return (
    
    <List>
        {todos?.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.name} completed={todo.completed}/>
        ))}
    </List>
  )
}

export default TodoList