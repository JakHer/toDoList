import React from "react";
import List from "./components/List/List";
import TaskList from "./context";

const App = () => {
  return (
    <TaskList>
      <List />
    </TaskList>
  );
};

export default App;
