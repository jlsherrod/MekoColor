export const addFormula = async (id, formulaData) => {
  try {
    const response = await fetch(`/api/clients/${id}/formulas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulaData),
    });

    if (!response.ok) {
      throw new Error("Failed to add new formula");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding formula:", error);
    throw error;
  }
};
