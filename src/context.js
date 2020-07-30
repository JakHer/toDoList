import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();

const TaskList = ({ children }) => {
  const [tasks, setTasks] = useState([
    { title: "Learn React", id: 1 },
    { title: "Do groceries", id: 2 },
    { title: "Cleanup Apartament", id: 3 },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  return (
    <AppContext.Provider value={{ tasks, addTask }}>
      {children}
    </AppContext.Provider>
  );
};

export default TaskList;
