import React, { useContext } from "react";
import ExpendItem from "./ExpendItem";
import { AppContext } from "../context/AppContext";

export default function ExpendList() {
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses?.map((expense) => (
        <ExpendItem id={expense?.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
