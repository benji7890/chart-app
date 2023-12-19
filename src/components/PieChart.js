import React, {useState} from 'react';
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import PieHeading from './PieHeading';

function PieChart() {
    const data = {
        labels: ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4'],
        datasets: [
          {
            label: '# of Votes',
            data: [12.5, 12.5, 25, 50],
            backgroundColor: [
              '#855CF8',
              '#E289F2',
              '#7879F1',
              '#B086FF',
            ],
          },
        ],
      };
    
      const options = {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              font: {
                size: 12,
                weight: 'normal'
              },
            },
          },
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    }

    return(
    <div class="container">
    <PieHeading />
    <Pie data={data} options={options}/>
    </div>)
}

export default PieChart;