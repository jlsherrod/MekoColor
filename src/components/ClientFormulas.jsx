import React, { useEffect, useState } from "react";

export default function ClientFormulas({ id }) {
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    fetch(`/api/clients/${id}/formulas`)
      .then((response) => response.json())
      .then((data) => setFormulas(data.formulas));
  }, [id]);

  return (
    <div>
      <ul>
        {formulas.map((formula) => (
          <li key={formula.id}>
            <span className="font-bold">{formula.date}:</span> {formula.content}
          </li>
        ))}
      </ul>
    </div>
  );
}