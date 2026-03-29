const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Sample sales data
const sales = [100, 200, 300, 400];

// API 1: Get sales
app.get("/sales", (req, res) => {
  res.json(sales);
});

// API 2: Get insights
app.get("/insights", (req, res) => {
  const total = sales.reduce((a, b) => a + b, 0);
  const avg = total / sales.length;
  const max = Math.max(...sales);

  res.json({
    totalSales: total,
    averageSales: avg,
    maxSale: max
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});