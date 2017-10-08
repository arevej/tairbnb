import React, { Component } from 'react';

class Slider extends Component {
  state = {
    number: 170,
    isPressed: false,
  }

  handleMove = (event) => {
    if (!this.state.isPressed) return;

    const beginningX = this.element.getBoundingClientRect().x;
    const mouseX = event.clientX;
    const relativeX = mouseX - beginningX;

    const { min, max, width } = this.props;
    const one = width/(max-min);

    const newNumber = Math.min(Math.max(relativeX/one + min, min), max);

    this.setState({ number: newNumber });
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false, number: Math.round(this.state.number) })
  }

  handleMouseDown = () => {
    this.setState({ isPressed: true })
  }

  render() {
    const { min, max, width } = this.props;
    const circleSize = 14;
    const { number } = this.state;

    const one = width/(max-min);

    const cord = one*(number-min)
    return (
      <div
        style={{ position: 'relative', width: width, height: circleSize }}
        onMouseMove={this.handleMove}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseUp}
        ref={element => this.element = element}
      >
        <div style={{ position: 'absolute', left: 0, right: 0, top: circleSize/2, height: 1, backgroundColor: '#111'}} />
        <div style={{ position: 'absolute', top: 0, left: cord-circleSize/2, width: circleSize, height: circleSize, borderRadius: circleSize/2, backgroundColor: '#666' }} />
      </div>
    );
  }
}


function PriceRangeMenu ({minPrice, maxPrice, width}) {
  return (
    <div style={{ fontWeight: 300 }}>
      <h3 style={{ flex: 1, margin: 0, fontWeight: 300, marginBottom: 15 }}>${minPrice} — ${maxPrice}</h3>
      <span>The average price per night for Vilnius is $55.</span>

      <Slider min={minPrice} max={maxPrice} width={width} />
    </div>
  )
}

export default PriceRangeMenu;
