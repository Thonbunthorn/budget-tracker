import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  });

  const alertType = totalExpense > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: £{budget - totalExpense}</span>
    </div>
  );
}
