import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";

const Form = () => {
  const { addTask, clearList, editItem, editTask, doNothing } = useContext(
    AppContext
  );
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
      setTitle("");
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
        <label htmlFor={title}></label>
        <button type="submit">
          {editItem ? "Edit " : "Add "}
          task
        </button>
      </form>
      {editItem ? (
        <button onClick={doNothing}>Stop Editing</button>
      ) : (
        <button type="clear" onClick={clearList}>
          Clear
        </button>
      )}
    </>
  );
};

export default Form;
