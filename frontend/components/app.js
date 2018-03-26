import React from 'react';

import Header from './header';

class App extends React.Component {

  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className='app'>
        <Header />
      </div>
    );
  }
}

export default App;
