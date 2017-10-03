import React, { Component } from 'react';

import SubmitPanel from './SubmitPanel';

function OptionMenuTitle({ label, onSelect, optionActive }) {
  return (
    <h3 style={{ margin: 0, fontWeight: 300, cursor: 'pointer' }} onClick={() => onSelect(!optionActive)}>
      <span style={{ display: 'inline-block', width: 15, height: 15, background: optionActive ? '#008489' : '#fff', content: '', marginRight: 10, border: '1px solid #aaa' }} />
      {label}
    </h3>
  )
}

// const x = () => console.log(42);
//
// <a onClick={x}>...</a>
// ===
// <a onClick={() => console.log(42)}>...</a>
// ===
// <a onClick={() => x()}>...</a>
//
// -----
//
// const changeTab = newTab => ...
//
// <TabSelector ... onSelect={changeTab} />
// ===
// <TabSelector ... onSelect={newTab => ...} />
// ===
// <TabSelector ... onSelect={newTab => changeTab(newTab)} />
//
// ----
//
//
// const changeOption = (newAge, newGender) => ...
// function AgeGenderSelect({ changeOption }) {
//   return (
//     <div>
//       <Select onSelect={newAge => changeOption(newAge, oldGender)} />
//       <Select onSelect={newGender => changeOption(oldAge, newGender)} />
//     </div>
//   );
// }

class RoomTypeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEntire: props.activeEntire,
      activePrivate: props.activePrivate,
      activeShared: props.activeShared,
    };
  }

  chooseOption = (option) => (newActive) => {
    this.setState({ [option]: newActive });
  }

  apply = () => {
    this.props.onSelect(
      this.state.activeEntire,
      this.state.activePrivate,
      this.state.activeShared,
    );
    this.props.onApply();
  }

  render() {
    const {activeEntire, activePrivate, activeShared} = this.state;
    return (
      <div style={{ fontWeight: 300 }}>
        <div style={{ marginBottom: 10 }}>
          <OptionMenuTitle label='Entire room' onSelect={this.chooseOption('activeEntire')} optionActive={activeEntire} />
          Have a place to yourself
        </div>
        <div style={{ marginBottom: 10 }}>
          <OptionMenuTitle label='Private room' onSelect={this.chooseOption('activePrivate')} optionActive={activePrivate} />
          Have your own room and share some common spaces
        </div>
        <div style={{ marginBottom: 20 }}>
          <OptionMenuTitle label='Shared room' onSelect={this.chooseOption('activeShared')} optionActive={activeShared} />
          Stay in a shared space, like a common room
        </div>
        <SubmitPanel onCancel={this.props.onCancel} onApply={this.apply} />
      </div>
    );
  }
}
// class RoomTypeMenu extends Component {
//   render() {
//     const {onSelect, activeEntire, activePrivate, activeShared} = this.props;
//     return (
//       <div style={{ fontWeight: 300 }}>
//         <div style={{ marginBottom: 10 }}>
//           <OptionMenuTitle label='Entire room' onSelect={active => onSelect(active, activePrivate, activeShared)} optionActive={activeEntire} />
//           Have a place to yourself
//         </div>
//         <div style={{ marginBottom: 10 }}>
//           <OptionMenuTitle label='Private room' onSelect={active => onSelect(activeEntire, active, activeShared)} optionActive={activePrivate} />
//           Have your own room and share some common spaces
//         </div>
//         <div style={{ marginBottom: 20 }}>
//           <OptionMenuTitle label='Shared room' onSelect={active => onSelect(activeEntire, activePrivate, active)} optionActive={activeShared} />
//           Stay in a shared space, like a common room
//         </div>
//         <SubmitPanel onClick={null} />
//       </div>
//     );
//   }
// }
// ===========
// function RoomTypeMenu({onSelect, activeEntire, activePrivate, activeShared}) {
//   return (
//     <div style={{ fontWeight: 300 }}>
//       <div style={{ marginBottom: 10 }}>
//         <OptionMenuTitle label='Entire room' onSelect={active => onSelect(active, activePrivate, activeShared)} optionActive={activeEntire} />
//         Have a place to yourself
//       </div>
//       <div style={{ marginBottom: 10 }}>
//         <OptionMenuTitle label='Private room' onSelect={active => onSelect(activeEntire, active, activeShared)} optionActive={activePrivate} />
//         Have your own room and share some common spaces
//       </div>
//       <div style={{ marginBottom: 20 }}>
//         <OptionMenuTitle label='Shared room' onSelect={active => onSelect(activeEntire, activePrivate, active)} optionActive={activeShared} />
//         Stay in a shared space, like a common room
//       </div>
//       <SubmitPanel onClick={null} />
//     </div>
//   );
// }

export default RoomTypeMenu;
