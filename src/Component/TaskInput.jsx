import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from './TodoContext';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
      
    }
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{ 
        border: '2px solid black', 
        borderRadius: '15px', 
        padding: '30px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        width: '80%', 
        maxWidth: '400px',
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundColor: 'white'
      }}>
        <h2 style={{ fontSize: '24px', textDecoration: 'underline' }}>Add a New Task</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={{
            width: '100%',
            padding: '10px',
            margin: '20px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <button 
          onClick={handleAddTask}
          style={{
            width: '100%',
            backgroundColor: 'blue',
            color: 'white',
            padding: '15px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'darkblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'blue'}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
