import React, { useState } from "react";

export default function AddFormulaForm({ id, onFormulaAdded }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormula = {
      name,
      date,
      content,
    };

    fetch(`/api/clients/${id}/formulas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormula),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New formula added:", data);
        onFormulaAdded();
        // Optionally, clear the form or provide user feedback
      })
      .catch((error) => {
        console.error("Error adding new formula:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white border-2 border-black shadow-sm p-1">
        <div>
          <label>Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Formula:</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="w-26 ml-auto bg-amber-400 border-2 border-black shadow-sm mt-2 p-1 px-2 text-xs font-body"
          type="submit"
        >
          ADD FORMULA
        </button>
      </div>
    </form>
  );
}
