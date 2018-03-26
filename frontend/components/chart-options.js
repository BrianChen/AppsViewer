import React from 'react';

const ChartOptions = ({updateChartNum, reloadApps}) => {
  return (
    <section className='chart-options'>
      <div className='chart-options__buttons'>
        <button className='chart-options-button button-one' onClick={() => updateChartNum(1)}>Chart 1</button>
        <button className='chart-options-button button-two' onClick={() => updateChartNum(2)}>Chart 2</button>
        <button className='chart-options-button button-three' onClick={() => reloadApps()}>Reload</button>
      </div>
    </section>
  );
}

export default ChartOptions;
