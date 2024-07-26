import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TaskDelete = () => {
  const { tasks, deleteTask } = useContext(TodoContext);

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
        <h2 style={{ fontSize: '24px', textDecoration: 'underline' }}>Delete Task</h2>
        <ul style={{
          listStyleType: 'disc',
          padding: '0 20px',
          textAlign: 'left'
        }}>
          {tasks.map((task, index) => (
            <li key={index} style={{ 
              margin: '10px 0', 
              fontSize: '16px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{task.text}</span>
              <button 
                onClick={() => deleteTask(index)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'darkred'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'red'}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskDelete;
