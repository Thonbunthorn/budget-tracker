import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
export default function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary">
      {/* {isEditing ? (

      )} */}
      <span>Budget: £ {budget}</span>
    </div>
  );
}
