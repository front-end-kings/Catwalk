import React from 'react';
import { Container } from 'react-bootstrap';
import { Chart } from 'react-google-charts';

const RatingDistribution = () => (
  <Container>
    <p>Barchart placeholder</p>
    <Chart
      width="500px"
      height="25%"
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Stars', 'Ratings', 'Other Ratings'],
        ['5 Stars', 100, (380 - 100)],
        ['4 Stars', 80, (380 - 80)],
        ['3 Stars', 150, (380 - 150)],
        ['2 Stars', 50, (380 - 50)],
        ['1 stars', 30, (380 - 30)],
      ]}
      options={{
        title: '100% reviews recommended this product',
        chartArea: { width: '50%' },
        colors: ['green', 'grey'],
        legend: { position: 'none' },
        isStacked: 'percent',
      }}
    />
  </Container>
);

export default RatingDistribution;
