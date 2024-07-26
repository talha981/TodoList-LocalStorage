import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TodoProvider } from '../src/Component/TodoContext';
import TaskInput from '../src/Component/TaskInput';
import TaskList from '../src/Component/TaskList';
import TaskDelete from './Component/DeleteTask';
const App = () => {
  return (
    <TodoProvider>
      <Router>
        <div className="App">
          <nav>
          <div style={{ marginTop: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontSize: '16px', margin: '0 10px' }}>Home</Link> |
          <Link to="/add" style={{ textDecoration: 'none', color: 'blue', fontSize: '16px', margin: '0 10px' }}>Add Task</Link> |
          <Link to="/list" style={{ textDecoration: 'none', color: 'blue', fontSize: '16px', margin: '0 10px' }}>Task List</Link> |
          <Link to="/delete" style={{ textDecoration: 'none', color: 'blue', fontSize: '16px', margin: '0 10px' }}>Delete Task</Link>
        </div>          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<TaskInput />} />
            <Route path="/list" element={<TaskList />} />
            <Route path="/delete" element={<TaskDelete />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
};

const Home = () => (
  <div style={{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif'
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
      <h2 style={{ fontSize: '24px', textDecoration: 'underline' }}>Welcome to the To-Do List App</h2>
      <p style={{ fontSize: '16px' }}>Use the navigation links to add tasks and view or delete the task list.</p>
      <Link 
        style={{
          width: '80%',
          backgroundColor: 'green',
          color: 'white',
          padding: '15px',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '0 auto'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = 'darkgreen'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'green'}
        to="/add" 
      >
        Add Task
      </Link>
    </div>
  </div>
  
  
);

export default App;
