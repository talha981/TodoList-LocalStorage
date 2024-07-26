import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

 export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};

