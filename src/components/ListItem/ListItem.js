import React from "react";

const ListItem = ({ task }) => (
  <li>
    <h2>{task.title}</h2>
    <div>
      <button>delete</button>
      <button>edit</button>
    </div>
  </li>
);

export default ListItem;
