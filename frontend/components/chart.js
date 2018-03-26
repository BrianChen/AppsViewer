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

    this.updateChartState = this.updateChartState.bind(this);
  }

  componentDidMount() {
    this.updateChartState(this.props.chartNum, this.props.apps);
  }

  componentWillReceiveProps(nextProps) {
    this.updateChartState(nextProps.chartNum, nextProps.apps);
  }

  updateChartState(chartNum, apps) {
    let chartData = {};
    let chartOptions = {};

    if (chartNum === 1) {
      chartData = getChartOneData(apps);
      chartOptions = getChartOneOptions();
    } else if (chartNum === 2) {
      chartData = getChartTwoData(apps);
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
