import React, { Component } from 'react';

function SubmitPanel({ onCancel, onApply }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10 }}>
      <span style={{ cursor: 'pointer'}} onClick={onCancel}>Cancel</span>
      <span style={{ color: '#008489', fontWeight: 500, cursor: 'pointer' }} onClick={onApply}>Apply</span>
    </div>
  )
}

export default SubmitPanel;
