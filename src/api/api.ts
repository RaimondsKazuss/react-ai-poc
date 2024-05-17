import axios from "axios";

export const getTableData = async () => {
  try {
    const response = await axios.get("../public/data.json");
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching table data:", error);
    return null;
  }
};
