// app/choose-your-meal/page.tsx

"use client"; // Add this line to mark the component as a client component

import { useEffect, useState } from "react";

// Define the data type based on the API response
interface MealData {
  id: string;
  name: string;
}

const ChooseYourMealPage = () => {
  const [meals, setMeals] = useState<MealData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/0426b947-97ee-42cf-a56f-4e6afa0c5332");
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        setMeals(data); // Set data from the API to state
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-10 px-4">
      <h2 style={{ color: "#E67700" }}>Available Meals</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal.id}>
              <td className="border px-4 py-2">{meal.id}</td>
              <td className="border px-4 py-2">{meal.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChooseYourMealPage;
