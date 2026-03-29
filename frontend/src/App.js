import React, { useEffect, useState } from "react";

function App() {
  const [sales, setSales] = useState([]);
  const [insights, setInsights] = useState({});

  // Fetch sales data
  useEffect(() => {
    fetch("http://localhost:5000/sales")
      .then(res => res.json())
      .then(data => setSales(data));
  }, []);

  // Fetch insights
  useEffect(() => {
    fetch("http://localhost:5000/insights")
      .then(res => res.json())
      .then(data => setInsights(data));
  }, []);

  // return (
  //   <div style={{ padding: "20px" }}>
  //     <h2>Smart Sales Dashboard</h2>

  //     <h3>Sales Data:</h3>
  //     {sales.map((item, index) => (
  //       <p key={index}>₹{item}</p>
  //     ))}

  //     <h3>Insights:</h3>
  //     <p>Total Sales: ₹{insights.totalSales}</p>
  //     <p>Average Sales: ₹{insights.averageSales}</p>
  //   </div>
  // );
  return (
  <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>📊 Smart Sales Dashboard</h1>

    <h3>Sales Data:</h3>
    <ul>
      {sales.map((item, index) => (
        <li key={index}>₹{item}</li>
      ))}
    </ul>

    <h3>Insights:</h3>
    <p><b>Total Sales:</b> ₹{insights.totalSales}</p>
    <p><b>Average Sales:</b> ₹{insights.averageSales}</p>
    <p><b>Max Sale:</b> ₹{insights.maxSale}</p>
  </div>
);
}

export default App;