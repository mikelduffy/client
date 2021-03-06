import React from 'react';
import { Row, Col, Navbar, NavItem } from 'react-materialize';

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.perOpen && nextProps.perClose) {
      let oldPercent = Math.floor(((this.props.perOpen - this.props.perClose)/this.props.perOpen * 100));
      let newPercent = Math.floor(((nextProps.perOpen - nextProps.perClose)/nextProps.perOpen * 100));
      if(oldPercent > newPercent) {
        // console.log('isSmaller');
        this.setState({isBigger: false});
      } else {
        // console.log('isBigger')
        this.setState({isBigger: true});
      }
    }
  }

  render() {
    let isBigger = this.state ? this.state.isBigger : null;
    let percent = this.props.perOpen === null && this.props.perClosed === null ? '-' : Math.floor(((this.props.perOpen - this.props.perClose)/this.props.perOpen * 100));
    let positive = (
      <Col className='percentChange' s={1}>
        { percent }% <img src='/img/greenArrow.svg'></img>
      </Col>
    );
    let negative = (
      <Col className='percentChange' s={1}>
        { percent }% <img src='/img/redArrow.svg'></img>
      </Col>
    );

    return (
      <Row className="exchangeBar">
        <Col s={1}>
        <span className='exchange-pair-title'>  {this.props.primaryCurrency}/
        <br/>
        {this.props.secondaryCurrency} </span>
        </Col>
        {isBigger ? positive : negative}
        <Col className='exchRate' s={1}>
          { this.props.exchangeRate.toFixed(2) }
        </Col>
        <Col s={3}>
          <span className='exchange-chart-data-title'>
            LOW
          </span>
          <span className='exchange-chart-data-info'>
            {this.props.perLow.toFixed(5)}
          </span>
          <span className='exchange-chart-data-title'>
            HIGH
          </span>
          <span className='exchange-chart-data-info'>
            {this.props.perHigh.toFixed(5)}
          </span>
          <span className='exchange-chart-data-title'>
            {this.props.periodDur}
          </span>
        </Col>
        <Col s={6}></Col>
      </Row>
    )
  }
}

export default ExchangeRates;
