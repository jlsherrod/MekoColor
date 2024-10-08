import { supabase } from "../supabaseClient.js";

export const fetchClients = async () => {
  try {
    const { data } = await supabase.from("clients").select("*");
    return data;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
};

export const getClientById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("clients") // Table name
      .select("*") // Columns to select
      .eq("id", id) // Filter by ID
      .single(); // Expecting a single result

    if (error) {
      throw new Error(`Error fetching client: ${error.message}`);
    }

    return data; // Return the client object
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const fetchFormulas = async (id) => {
  try {
    const { data, error } = await supabase
      .from("formulas")
      .select("*")
      .eq("client_id", id);

    if (error) {
      throw new Error(`
    Error fetching formulas: ${error.message}
     `);
    }
    return data;
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
};

export const addFormula = async (id, formulaData) => {
  try {
    const { content } = formulaData;
    const createdAt = new Date().toISOString();

    const { data, error } = await supabase
      .from("formulas")
      .insert([{ created_at: createdAt, client_id: id, content: content }])
      .select();
    if (error) {
      throw new Error(`Failed to add new formula: ${error.message}`);
    }

    return data[0];
  } catch (error) {
    console.error("Error adding formula:", error);
    throw error;
  }
};
