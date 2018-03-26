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
    this.updateChartState(this.props.chartNum);
  }

  componentWillReceiveProps(nextProps) {
    this.updateChartState(nextProps.chartNum);
  }

  updateChartState(chartNum) {
    let chartData = {};
    let chartOptions = {};

    if (chartNum === 1) {
      chartData = getChartOneData(this.props.apps);
      chartOptions = getChartOneOptions();
    } else if (chartNum === 2) {
      chartData = getChartTwoData(this.props.apps);
      chartOptions = getChartTwoOptions();
    }

    this.setState({
      chartData,
      chartOptions
    });
  }

  renderChart() {
    return (
      this.props.chartNum === 1 ?
        (<Bar data={this.state.chartData} options={this.state.chartOptions} />) :
        (<Pie data={this.state.chartData} options={this.state.chartoptions} />)
    );
  }

  render() {
    const chart = this.renderChart();

    return (
      <div className='chart'>
        {chart}
      </div>
    )
  }
}

export default Chart;
