import { supabase } from "../supabaseClient.js";

export const fetchClients = async () => {
  const { data, error } = await supabase.from("clients").select("*");
  if (error) {
    throw error;
  }
  return data;
};

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

export const fetchFormulas = async (id) => {
  try {
    const response = await fetch(`/api/clients/${id}/formulas`);

    if (!response.ok) {
      throw new Error("Failed to fetch formulas");
    }

    const data = await response.json();
    return data.formulas;
  } catch (error) {
    console.error("Error fetching formulas:", error);
    throw error;
  }
};
