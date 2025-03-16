// pages/api/fetchData.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://run.mocky.io/v3/0426b947-97ee-42cf-a56f-4e6afa0c5332");
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    res.status(200).json(data); // Send data to the frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
