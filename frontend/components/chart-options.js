import React from 'react';

const ChartOptions = ({updateChartNum}) => {
  return (
    <section className='chart-options'>
      <button className='chart-options__button' onClick={() => updateChartNum(1)}>Chart 1</button>
      <button className='chart-options__button' onClick={() => updateChartNum(2)}>Chart 2</button>
    </section>
  );
}

export default ChartOptions;
