import React from 'react';

import { Bar, Pie } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Applications',
            data: [],
            backgroundColor: 'rgba(0, 0, 255, 0.3)'
          }
        ]
      }
    }
  }

  componentWillMount() {
    const labels = [];
    for (let i=0; i<24; i++) {
      labels.push(i);
    }

    const data = new Array(24).fill(0);
    this.props.apps.forEach((app) => {
      let dateTime = app.created_at;
      const beginIndex = dateTime.indexOf('T') + 1;
      const hourMinSec = dateTime.slice(beginIndex, dateTime.length).split(':');
      const hour = parseInt(hourMinSec[0]);
      data[hour] = data[hour] + 1;

    });

    this.setState({
      chartData: {
        labels: labels,
        datasets: [
          {
            label: 'Applications',
            data: data,
            backgroundColor: 'rgba(0, 0, 255, 0.3)'
          }
        ]
      }
    });
  }

  render() {
    let display;
    if (this.props.chart === 1) {
      display = 'Number of Applications per Hour';
    }
    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: 'Number of Applications',
              fontSize: 25
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
