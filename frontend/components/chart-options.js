import React from 'react';

const ChartOptions = ({updateChartNum, reloadApps}) => {
  return (
    <section className='chart-options'>
      <button className='chart-options__button chart-one' onClick={() => updateChartNum(1)}>Chart 1</button>
      <button className='chart-options__button chart-two' onClick={() => updateChartNum(2)}>Chart 2</button>
      <button className='chart-options__button reload' onClick={() => reloadApps()}>Reload</button>
    </section>
  );
}

export default ChartOptions;
