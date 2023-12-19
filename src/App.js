import './App.css';
import React, {useState} from 'react';
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import Table from './components/Table';
import PieChart from './components/PieChart';
function App() {
  

  return <div className="app">
    <PieChart />
    <Table />
  </div>
}

export default App;
