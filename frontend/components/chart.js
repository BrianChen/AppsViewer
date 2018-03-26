import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import { getChartOneData } from '../helpers/charts';

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
      },
      chartOptions: {}
    }
  }

  componentWillMount() {
    const chartData = getChartOneData(this.props.apps);
    debugger;
    this.setState({
      chartData
    });
  }

  render() {
    let displayText;
    if (this.props.chartNum === 1) {
      displayText = 'Number of Applications per Hour';
    }

    return (
      <Bar
        data={this.state.chartData}
        options={{
          title: {
            display: true,
            text: displayText,
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'bottom'
          }
        }}
      />
    )
  }
}

export default Chart;
