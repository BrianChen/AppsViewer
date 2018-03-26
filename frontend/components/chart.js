import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import { getChartOneData, getChartOneOptions, getChartTwoData, getChartTwoOptions } from '../helpers/charts';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      chartOptions: {}
    }
  }

  componentWillMount() {
    let chartData = {};
    let chartOptions = {};

    if (this.props.chartNum === 1) {
      chartData = getChartOneData(this.props.apps);
      chartOptions = getChartOneOptions();
    } else if (this.props.chartNum === 2) {
      chartData = getChartTwoData(this.props.apps);
      chartOptions = getChartTwoOptions();
    }

    this.setState({
      chartData,
      chartOptions
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.chartNum !== nextProps) {
  //
  //   }
  // }

  renderChart() {
    if (this.props.chartNum === 1) {
      return <Bar data={this.state.chartData} options={this.state.chartOptions} />
    } else if (this.props.chartNum === 2) {
      return <Pie data={this.state.chartData} options={this.state.chartoptions} />
    }
  }

  render() {
    const chart = this.renderChart();
    debugger;
    return (
      <div className='chart'>
        {chart}
      </div>
    )
  }
}

export default Chart;
