import React, { useEffect, useState } from "react";
import { fetchFormulas } from "../utils/api";

export default function ClientFormulas({ id, refreshTrigger }) {
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    const getFormulas = async () => {
      try {
        const formulaData = await fetchFormulas(id);
        setFormulas(formulaData);
      } catch (error) {
        console.error("Unexpected error:", error);
        throw error;
      }
    };
    getFormulas();
  }, [id, refreshTrigger]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (formulas.length === 0) {
    return <div>NO PREVIOUS FORMULAS</div>;
  }

  return (
    <ul>
      {formulas.toReversed().map((formula) => (
        <li key={formula.id}>
          <span className="font-bold">
            {formatDate(formula.created_at)}: {formula.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
