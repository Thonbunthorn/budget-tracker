import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

export default function ExpendItem(props) {
  const { depatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    depatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge rounded-pill text-bg-primary">
          £ {props.cost}
        </span>
        <span style={{ color: "red" }}>
          <TiDelete size="1.5em" onClick={handleDeleteExpense} />
        </span>
      </div>
    </li>
  );
}
