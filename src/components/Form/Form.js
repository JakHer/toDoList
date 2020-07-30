import React, { useContext, useState } from "react";
import { AppContext } from "../../context";

const Form = () => {
  const { addTask, clearList } = useContext(AppContext);
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
    <>
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
      </form>
      <button type="clear" onClick={clearList}>
        Clear
      </button>
    </>
  );
};

export default Form;
