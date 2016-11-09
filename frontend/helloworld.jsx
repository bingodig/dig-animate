
import React, { Component } from 'react';
import {OneAnim, CssAnim, QueueAnim, ScrollAnim, BannerAnim} from '../lib/animate';
import './main.css';

const {Parallax} = ScrollAnim;

class App extends Component {
  static defaultProps = {

  }
  constructor() {
    super(...arguments);
  }
  render() {
    return (
    	<div style={{height:1400,width:300,overFlow:'auto',margin:'0 auto',background:'#eee'}}>
          <h1>动画</h1>
          <OneAnim
            animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
            paused={this.props.paused}
            style={{ left: '-20%' }}
            className="test-animate-box"  style={{top:'-20%'}}/>

            <CompCssAnim />
            <CompQueueAnim />
            <CompScrollAnim />
      	</div>
    );
  }
}

class CompCssAnim extends Component{
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }
  
  onClick(){
    this.setState({
      show: !this.state.show,
    });
  }
  
  render(){
    return (
      <div>
        <button onClick={this.onClick}>切换</button>
        <CssAnim
          transitionName="fade"
          transitionAppear
        >
          {
            this.state.show ? 
              <div key="1" className="test-animate-box" style={{top:'-20%'}} /> : null}
        </CssAnim>
      </div>
    );
  }
}

class CompQueueAnim extends Component{
  render(){
    return (
      <QueueAnim delay={300} className="queue-simple">
        <div key="a">依次进场</div>
        <div key="b">依次进场</div>
        <div key="c">依次进场</div>
        <div key="d">依次进场</div>
      </QueueAnim>
    );
  }
}

class CompScrollAnim extends React.Component {
  render() {
    return (
      <div>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="test-animate-box"/>
      </div>
    );
  }
}

export default App;