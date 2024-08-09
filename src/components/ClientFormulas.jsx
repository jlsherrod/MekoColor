import React, { useEffect, useState } from "react";
import { fetchFormulas } from "../utils/api";

export default function ClientFormulas({ id, refreshTrigger }) {
  const [formulas, setFormulas] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getFormulas = async () => {
      try {
        const formulaData = await fetchFormulas(id);
        setFormulas(formulaData);
      } catch (error) {
        setError(error);
      }
    };
    getFormulas();
  }, [id, refreshTrigger]);

  if (formulas.length === 0) {
    return <div>NO PREVIOUS FORMULAS</div>;
  }

  return (
    <ul>
      {formulas.toReversed().map((formula) => (
        <li key={formula.id}>
          <span className="font-bold">
            {formula.created_at}: {formula.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
