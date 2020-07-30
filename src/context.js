import React, { useState } from "react";

export const AppContext = React.createContext();

const TaskList = ({ children }) => {
  const [tasks, setTasks] = useState([
    { task: "Learn React", id: 1 },
    { task: "Do groceries", id: 2 },
    { task: "Cleanup Apartament", id: 3 },
  ]);

  return (
    <AppContext.Provider value={{ tasks }}>{children}</AppContext.Provider>
  );
};

export default TaskList;
