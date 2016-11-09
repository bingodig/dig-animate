
import React, { Component } from 'react';
import './main.css';
import {TimePicker} from 'antd';
import 'antd/dist/antd.css';
class App extends Component {
  static defaultProps = {

  }
  constructor() {
    super(...arguments);
  }
  render() {
    return (
    	<div>
        <TimePicker onChange={onChange} />
      </div>
    );
  }
}

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default App;