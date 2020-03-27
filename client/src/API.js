const API_URL = "http://localhost:5000";

export const listLogEntries = async () => {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
};
