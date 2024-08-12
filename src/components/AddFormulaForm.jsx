import React, { useState } from "react";
import { addFormula } from "../utils/api";

export default function AddFormulaForm({ id, onFormulaAdded }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormula = {
      created_at: new Date().toLocaleDateString(),
      content,
    };

    try {
      await addFormula(id, newFormula);
      console.log("New formula added successfully");
      onFormulaAdded();
    } catch (error) {
      console.error("Error adding new formula:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white border-2 border-black shadow-sm p-1">
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
