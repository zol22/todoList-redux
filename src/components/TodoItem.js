import React, { useState } from 'react'
import { ListItem , ListItemText, Button, TextField, Container } from '@mui/material';
import { removeTodo, setTodoStatus, setUpdate } from '../features/todoSlice';
import { useDispatch } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


function TodoItem({ id, title, completed}) {

    const dispatch = useDispatch(); // from redux store
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(title);

    const handleUpdate = () => {
          dispatch(setUpdate({
                        id: id,
                        task: editTask,
                    }))
        setIsEditing(false);
    }

  return (
    <Container  style={{display: 'flex', justifyContent: 'space-evenly' }}>

    { isEditing ? (
        <>
        {/* If isEditing is true, this new form is loaded (with the same information in the listItem but now it's able to be updated) and the ListItem is not loaded (kinda dissapear for a moment)*/}
        <TextField fullWidth id="outlined-basic" label="To do item" variant="outlined" value={editTask} style={{marginTop:'10px'}} 
            onChange={(e) => {
                setEditTask(e.target.value)
            }}/>
        <Button 
            variant="contained" 
            color="primary" 
            onClick={handleUpdate}
            style={{marginLeft:'10px'}}
        >
            Update task
        </Button>
        </>
    ) : (
        // Otherwise, if isEditing is false, load this listItem
        <ListItem  key={id}>
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}> 
                {title} 
            </ListItemText>
        </ListItem>
    )}
      
      {/* Buttons are loaded regardless isEditing condition*/}
        <div style={{display: 'flex '}}>
            <Button onClick={ () => {
                        dispatch(setTodoStatus({
                        id: id,
                        completed:!completed
                    }))
                }} > 
                <CheckIcon fontSize="large" style={{ color: completed ? "green" : "gray", padding: '10px 10px'}}/>
            </Button>

            <Button onClick={ () => setIsEditing(true)} > 
                <BorderColorIcon fontSize="large" style={{  padding: '10px 10px'}}/>
            </Button>

            <Button onClick={() => {
                    dispatch(removeTodo({
                        id: id
                        }));
                    }}>
               <DeleteIcon/>
            </Button>
        </div>

    </Container>
  )
}

export default TodoItem