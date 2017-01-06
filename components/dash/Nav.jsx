import React from 'react';

import { Router, Route, browserHistory } from 'react-router';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('nav props', this.props);
  }

  clickHandler(route) {
    // debugger;
    this.props.toRoute(route);
  }

  render() {
    return (
      <div className="navBar">
        <h1>  
          Cryptocracy
        </h1>

        <a className='' onClick={this.clickHandler.bind(this, '/settings')}> BTC </a>
        <a className='' onClick={this.clickHandler.bind(this, '/settings')}> ETH </a>
        <a className='' onClick={this.clickHandler.bind(this, '/settings')}> LTC </a>
        <a className='' onClick={this.clickHandler.bind(this, '/settings')}> Settings </a>
      </div>
      )
  }
}

export default Nav;
