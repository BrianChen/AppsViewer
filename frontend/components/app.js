import React from 'react';

import Header from './header';
import ChartOptions from './chart-options';
import Chart from './chart';
import { fetchApplications, asArray, fetchReloadedApps} from '../helpers/api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      apps: [],
      chartNum: 1,
    }

    this.updateApplications = this.updateApplications.bind(this);
    this.updateChartNum = this.updateChartNum.bind(this);
    this.reloadApps = this.reloadApps.bind(this);
  }

  componentWillMount() {
    fetchApplications(this.updateApplications, (err) => console.log(err));
    // if (localStorage.apps) {
    //   this.setState({
    //     apps: localStorage.apps
    //   });
    // } else {
    //   fetchApplications(this.updateApplications, (err) => console.log(err));
    // }
  }

  updateApplications(data) {
    const apps = asArray(data);

    this.setState({
      apps: apps
    });
  }

  reloadApps() {
    // Deletes the 100 applications and re-seeds another 100 applications with the same random figures
    // Reload the page after re-seeding is complete and the page should re-render the charts with the new data points

    fetchReloadedApps(this.updateApplications, (err) => console.log(err));
  }

  renderChart() {
    if (this.state.apps.length > 0) {
      return (
        <Chart chartNum={this.state.chartNum} apps={this.state.apps}/>
      );
    }
  }

  updateChartNum(num) {
    this.setState({
      chartNum: num,
    });
  }


  render() {
    return (
      <div className='app'>
        <Header />
        <ChartOptions updateChartNum={this.updateChartNum} reloadApps={this.reloadApps}/>
        {this.renderChart()}
      </div>
    );
  }
}

export default App;
