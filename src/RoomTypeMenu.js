import React, { Component } from 'react';

import SubmitPanel from './SubmitPanel';

function OptionMenuTitle({ label, onClick, optionActive }) {
  return (
    <h3 style={{ margin: 0, fontWeight: 300, cursor: 'pointer' }} onClick={onClick}>
      <span style={{ display: 'inline-block', width: 15, height: 15, background: optionActive ? '#008489' : '#fff', content: '', marginRight: 10, border: '1px solid #aaa' }} />
      {label}
    </h3>
  )
}

function RoomTypeMenu({onClickEntire, onClickPrivate, onClickShared, activeEntire, activePrivate, activeShared}) {
  return (
    <div style={{ fontWeight: 300 }}>
      <div style={{ marginBottom: 10 }}>
        <OptionMenuTitle label='Entire room' onClick={onClickEntire} optionActive={activeEntire} />
        Have a place to yourself
      </div>
      <div style={{ marginBottom: 10 }}>
        <OptionMenuTitle label='Private room' onClick={onClickPrivate} optionActive={activePrivate} />
        Have your own room and share some common spaces
      </div>
      <div style={{ marginBottom: 20 }}>
        <OptionMenuTitle label='Shared room' onClick={onClickShared} optionActive={activeShared} />
        Stay in a shared space, like a common room
      </div>
      <SubmitPanel onClick={null} />
    </div>
  );
}

export default RoomTypeMenu;
