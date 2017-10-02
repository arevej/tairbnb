import React, { Component } from 'react';

import SubmitPanel from './SubmitPanel';
import AddReduceController from './AddReduceController';

function GuestsMenu({adultGuestsQty, childrenGuestsQty, infantsGuestsQty, addAdultGuest, reduceAdultGuest, addChildrenGuest, reduceChildrenGuest, addInfantsGuest, reduceInfantsGuest }) {
  return (
    <div style={{ fontWeight: 300 }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10}}>
        <h3 style={{ flex: 1, margin: 0, fontWeight: 300 }}>Adults</h3>
        <AddReduceController
          guestsQty={adultGuestsQty}
          addGuest={addAdultGuest}
          reduceGuest={reduceAdultGuest}
          canReduce={adultGuestsQty > 1}
          canAdd={adultGuestsQty + childrenGuestsQty < 16}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10}}>
        <h3 style={{ flex: 1, margin: 0, fontWeight: 300 }}>Children <span style={{ fontSize: 15}}>(Ages 2 - 12)</span></h3>
        <AddReduceController
          guestsQty={childrenGuestsQty}
          addGuest={addChildrenGuest}
          reduceGuest={reduceChildrenGuest}
          canReduce={childrenGuestsQty > 0}
          canAdd={childrenGuestsQty + adultGuestsQty < 16}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20}}>
        <h3 style={{ flex: 1, margin: 0, fontWeight: 300 }}>Infants <span style={{ fontSize: 15}}>(Under 2)</span></h3>
        <AddReduceController
          guestsQty={infantsGuestsQty}
          addGuest={addInfantsGuest}
          reduceGuest={reduceInfantsGuest}
          canReduce={infantsGuestsQty > 0}
          canAdd={infantsGuestsQty < 5}
        />
      </div>
      <SubmitPanel />
    </div>
  )
}

export default GuestsMenu;
