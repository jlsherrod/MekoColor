import React, { useEffect, useState } from "react";

export default function ClientFormulas({ id, refreshTrigger }) {
  const [formulas, setFormulas] = useState([]);

  const fetchFormulas = () => {
    fetch(`/api/clients/${id}/formulas`)
      .then((response) => response.json())
      .then((data) => setFormulas(data.formulas || []));
  };

  useEffect(() => {
    fetchFormulas();
  }, [id, refreshTrigger]);

  if (formulas.length === 0) {
    return <div>NO PREVIOUS FORMULAS</div>;
  }

  return (
    <ul>
      {formulas.map((formula) => (
        <li key={formula.id}>
          <span className="font-bold">
            Date: {formula.date}: {formula.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
