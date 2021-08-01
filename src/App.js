import React, { Component } from 'react';
import MyAppBar from './MyAppBar';

import Countries from './Countries';

class App extends Component {
  render() {
    return (
      <div>
        <MyAppBar />
        <br />
        <Countries />
      </div>
    );
  }
}

export default App;