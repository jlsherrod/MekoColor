import React, { useEffect, useState } from "react";
import { fetchFormulas } from "../utils/api";

export default function ClientFormulas({ id, refreshTrigger }) {
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFormulas(id);
        setFormulas(data);
      } catch (error) {
        console.error("Error fetching formulas:", error);
      }
    };

    fetchData();
  }, [id, refreshTrigger]);

  if (formulas.length === 0) {
    return <div>NO PREVIOUS FORMULAS</div>;
  }

  return (
    <ul>
      {formulas.toReversed().map((formula) => (
        <li key={formula.id}>
          <span className="font-bold">
            {formula.date}: {formula.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
