import React, { useContext, useState } from "react";
import { AppContext } from "../../context";

const Form = () => {
  const { addTask } = useContext(AppContext);
  const [title, setTitle] = useState(``);

  const handleChangeFn = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitFn = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle(``);
  };

  return (
    <form onSubmit={handleSubmitFn}>
      <input
        onChange={handleChangeFn}
        value={title}
        type="text"
        required
        placeholder="Add new task"
      ></input>
      <label htmlFor="1"></label>
      <button type="submit">Add task</button>
      <button>Clean</button>
    </form>
  );
};

export default Form;
