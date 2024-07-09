import React, { useEffect, useState } from "react";

export default function ClientFormulas({ clientId }) {
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    fetch(`/api/clients/${clientId}/formulas`)
      .then((response) => response.json())
      .then((data) => setFormulas(data.formulas));
  }, [clientId]);

  return (
    <div>
      <h1>Formulas for Client {clientId}</h1>
      <ul>
        {formulas.map((formula) => (
          <li key={formula.id}>
            {formula.name}: {formula.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
