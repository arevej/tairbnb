import React, { Component } from 'react';

function CircleButton({ label, onClick, disabled }) {
  return (
    <span style={{
      fontSize: 17,
      lineHeight: '25px',
      display: 'inline-block',
      textAlign: 'center',
      width: 25,
      height: 25,
      color: 'rgba(0, 132, 137, 1)',
      border: disabled ? ('1px solid rgba(0, 132, 137, 0.3)') : '1px solid rgba(0, 132, 137, 1)',
      borderRadius: 100,
    }} onClick={!disabled ? onClick : null}>
      {label}
    </span>
  )
}

function AddReduceController ({ addGuest, reduceGuest, guestsQty, canAdd, canReduce }) {
  return (
    <div style={{ width: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <CircleButton label="-" disabled={!canReduce} onClick={reduceGuest} />
      {guestsQty}
      <CircleButton label="+" disabled={!canAdd} onClick={addGuest} />
    </div>
  )
}

export default AddReduceController;
