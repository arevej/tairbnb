import React, { Component } from 'react';

import './SlideShow.css';

export default class SlideShow extends Component {
  state = {
    currentPicIdx: 0,
  };

  next = () => {
    const currentPicIdx = this.state.currentPicIdx + 1
    this.setState({ currentPicIdx: currentPicIdx })
  };

   previous = () => {
     const currentPicIdx = this.state.currentPicIdx - 1
     this.setState({ currentPicIdx: currentPicIdx})
   }

  render() {
    const { pics } = this.props;
    const pic = pics[this.state.currentPicIdx];
    return (
      <div style={{
        height: '180px',
        width: '280px',
        backgroundImage: `url(" ${pic} ")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
      }}>
        {this.state.currentPicIdx !== 0 ? (
          <div className="prev-button" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 70, cursor: 'pointer' }} onClick={this.previous}>
          </div>
        ) : null }
        {this.state.currentPicIdx !== pics.length - 1 ? (
          <div className="next-button" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 70, cursor: 'pointer' }} onClick={this.next}>
          </div>
        ) : null}
      </div>
    )
  };
}
