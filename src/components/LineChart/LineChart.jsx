import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([['Date', 'Prices']]);

  useEffect(() => {
    let dataCopy = [['Date', 'Prices']];
    if (historicalData.prices) {
      historicalData.prices.forEach((item) => {
        // item[0] is a timestamp in ms, item[1] is the price
        const date = new Date(item[0]);
        // Format as 'YYYY-MM-DD'
        const formattedDate = date.toLocaleDateString('en-CA');
        dataCopy.push([formattedDate, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;