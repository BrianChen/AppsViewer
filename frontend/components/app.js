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

  componentDidMount() {
    fetchApplications(this.updateApplications, (err) => console.log(err));
  }

  updateApplications(data) {
    const apps = asArray(data);

    this.setState({
      apps: apps
    });
  }

  reloadApps() {
    fetchReloadedApps(this.updateApplications, (err) => console.log(err));
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
        <Chart chartNum={this.state.chartNum} apps={this.state.apps}/>
      </div>
    );
  }
}

export default App;
