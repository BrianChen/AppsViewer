import React from 'react';

import Header from './header';
import ChartOptions from './chart-options';
import Chart from './chart';
import { fetchApplications, asArray} from '../helpers/api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      apps: [],
      chart: 1,
    }

    this.updateApplications = this.updateApplications.bind(this);
    this.renderChartOne = this.renderChartOne.bind(this);
    this.updateChartNum = this.updateChartNum.bind(this);
  }

  componentWillMount() {
    if (localStorage.apps) {
      this.setState({
        apps: localStorage.apps
      });
    } else {
      fetchApplications(this.updateApplications, (err) => console.log(err));
    }
  }

  updateApplications(data) {
    const apps = asArray(data);

    this.setState({
      apps
    });
  }

  renderChartOne() {
    if (this.state.apps.length > 0) {
      return (
        <Chart apps={this.state.apps}/>
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
        <ChartOptions updateChartNum={this.updateChartNum}/>
        {this.renderChartOne()}
      </div>
    );
  }
}

export default App;
