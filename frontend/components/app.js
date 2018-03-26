import React from 'react';

import Header from './header';
import { fetchApplications, asArray} from '../helpers/api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      apps: []
    }

    this.updateApplications = this.updateApplications.bind(this);
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

  render() {
    debugger;
    return (
      <div className='app'>
        <Header />
      </div>
    );
  }
}

export default App;
