import React, { Component } from 'react';
import SubmitPanel from './SubmitPanel'


function Toggle({ isActive, onChange }) {
  return (
    <div>
      <div style={{ position: 'relative', height: 25, width: 40, border: '1px solid #777', borderRadius: 15, backgroundColor: !isActive ? '#ccc' : '#008489', transition: '0.2s all' }} onClick={() => onChange(!isActive)}>
        <div style={{ position: 'absolute', top: 0, left: !isActive ? 0 : 15, height: 25, width: 25, borderRadius: 15, backgroundColor: '#fff', transition: '0.2s all' }}>
          <div style={{ position: 'absolute', top: 4, left: 7, color: '#666' }}>{!isActive ? '✕' : '✓' }</div>
        </div>
      </div>
    </div>
  )
}

class InstantBookMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.instantBook,
    };
  }

  changeInstantBook = (active) => {
    this.setState({ isActive: active });
  }

  apply = () => {
    this.props.onSelect(
      this.state.isActive
    )
    this.props.onApply();
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15}}>
          <div>
            <h3 style={{ margin: 0, fontWeight: 400 }}>Instant Book</h3>
            <span style={{ fontSize: 14, fontWeight: 300 }}>Listings you can book without waiting for host approval</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 50}}>
            <Toggle isActive={this.state.isActive} onChange={this.changeInstantBook} />
          </div>
        </div>
        <SubmitPanel onCancel={this.props.onCancel} onApply={this.apply} />
      </div>
    )
  };
}

export default InstantBookMenu;
