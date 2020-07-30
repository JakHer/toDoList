import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";

const Form = () => {
  const { addTask, clearList, editItem, editTask } = useContext(AppContext);
  const [title, setTitle] = useState(``);

  const handleChangeFn = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitFn = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    editItem ? setTitle(editItem.title) : setTitle(``);
  }, [editItem]);

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
        <button type="submit">
          {editItem ? "Edit " : "Add "}
          task
        </button>
      </form>
      <button type="clear" onClick={clearList}>
        Clear
      </button>
    </>
  );
};

export default Form;
