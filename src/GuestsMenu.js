import React, { Component } from 'react';

import SubmitPanel from './SubmitPanel';
import AddReduceController from './AddReduceController';

class GuestsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adultGuestsQty: props.adultGuestsQty,
      childrenGuestsQty: props.childrenGuestsQty,
      infantsGuestsQty: props.infantsGuestsQty,
    };
  }

  addGuest = (guest) => () => {
    this.setState({ [guest]: this.state[guest] + 1 })
  }

  reduceGuest = (guest) => () => {
    this.setState({ [guest]: this.state[guest] - 1 })
  }

  apply = () => {
    this.props.onChange(
      this.state.adultGuestsQty,
      this.state.childrenGuestsQty,
      this.state.infantsGuestsQty,
    );
    this.props.onApply();
  }

  render() {
    const { adultGuestsQty, childrenGuestsQty, infantsGuestsQty } = this.state;
    return (
      <div style={{ fontWeight: 300 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10}}>
          <h3 style={{ flex: 1, margin: 0, fontWeight: 300 }}>Adults</h3>
          <AddReduceController
            guestsQty={adultGuestsQty}
            addGuest={this.addGuest('adultGuestsQty')}
            reduceGuest={this.reduceGuest('adultGuestsQty')}
            canReduce={adultGuestsQty > 1}
            canAdd={adultGuestsQty + childrenGuestsQty < 16}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10}}>
          <h3 style={{ flex: 1, margin: 0, fontWeight: 300 }}>Children <span style={{ fontSize: 15}}>(Ages 2 - 12)</span></h3>
          <AddReduceController
            guestsQty={childrenGuestsQty}
            addGuest={this.addGuest('childrenGuestsQty')}
            reduceGuest={this.reduceGuest('childrenGuestsQty')}
            canReduce={childrenGuestsQty > 0}
            canAdd={childrenGuestsQty + adultGuestsQty < 16}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20}}>
          <h3 style={{ flex: 1, margin: 0, fontWeight: 300 }}>Infants <span style={{ fontSize: 15}}>(Under 2)</span></h3>
          <AddReduceController
            guestsQty={infantsGuestsQty}
            addGuest={this.addGuest('infantsGuestsQty')}
            reduceGuest={this.reduceGuest('infantsGuestsQty')}
            canReduce={infantsGuestsQty > 0}
            canAdd={infantsGuestsQty < 5}
          />
        </div>
        <SubmitPanel onCancel={this.props.onCancel} onApply={this.apply} />
      </div>
    )
  }
}

export default GuestsMenu;
