import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Alert} from '@mui/material';
import { addTodo } from '../features/todoSlice';


function AddTodo() {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch(); // from redux store
    const [alert,setAlert] = useState(false)
  

  return (
    <div>
        <TextField fullWidth id="outlined-basic" label="To do item" variant="outlined" value={inputValue}  
        onChange={(e) => {
          setInputValue(e.target.value)
          setAlert(false);
          }} />
        <div>
          {alert ? <Alert severity="info">Task cant be empty, Please enter a task</Alert> : null }
        </div>
        <Button 
            variant="contained" 
            fullWidth
            color="primary" 
            onClick={() => {
              if(inputValue) { // if input value is not empty
                dispatch(addTodo({ task: inputValue }));
                setInputValue("");
                setAlert(false);
               
              } else {
               setAlert(true);
                }
              }
            }>
            Add Task
        </Button>
    </div>
  )
}

export default AddTodo