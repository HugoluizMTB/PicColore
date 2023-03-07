import React from "react";
import Stopwatch from "./stopwatch.component";

const ReadOnlyRow = ({ costumer, handleDeleteClick }) => {
  return (
    <tr>
      <td>{costumer.responsibleFullName}</td>
      <td>{costumer.childName}</td>
      <td><Stopwatch /></td>
      <td>{costumer.responsibleCPF}</td>
      <td>{costumer.responsiblePhoneNumber}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(costumer.id)}>
          Encerrar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;