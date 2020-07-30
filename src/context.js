import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();

const TaskList = ({ children }) => {
  const [tasks, setTasks] = useState([
    { title: "Learn React", id: 1 },
    { title: "Do groceries", id: 2 },
    { title: "Cleanup Apartament", id: 3 },
  ]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default TaskList;
