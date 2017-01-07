import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import Graph from './Graph.jsx';
import History from './History.jsx';
import _ from 'lodash';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBalance: 0
    }
  }

  componentDidMount() {
    console.log('dash', this.props);
    let userID = this.props.userData.userID
    const options = {userID: userID, currency: 'BTC'};
    this.props.deep.event.emit('checkBalance', options);
    this.props.deep.event.subscribe('returnBalance', this._setUserBalance.bind(this));

    this._setUserData.bind(this);
  }

  _setUserData() {
    const change = _.extend({}, this.state);
    change.userData = this.props.userData
    this.setState(change);
  }

  _setUserBalance(data) {
    console.log('setBalance', data.balance);
    const change = _.extend({}, this.state);
    change.userBalance = data.balance;
    this.setState(change);
  }


  changeRoute(route) {
    this.props.router.push(route);
  }

  render() {
    return (
      <div>
        <Nav toRoute={this.changeRoute.bind(this)} />
        <ExchangeRates deep={this.props.deep} />
        <Transaction userData={this.props.userData} userBalance={this.state.userBalance} deep={this.props.deep} />
        <History deep={this.props.deep} />
        <Graph deep={this.props.deep} />
      </div>
      )
  }
}

export default Dashboard;
