import React from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TaskList from "./context";

const App = () => {
  return (
    <TaskList>
      <Header />
      <Form />
      <List />
    </TaskList>
  );
};

export default App;
