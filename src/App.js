import React, { Component } from 'react';

import Stars from './Stars';
import SlideShow from './SlideShow';
import MenuItem from './MenuItem';
import RoomTypeMenu from './RoomTypeMenu';
import GuestsMenu from './GuestsMenu';
import InstantBookMenu from './InstantBookMenu';

import './App.css';

function ApartmentGrid({children}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: '1px', gridRowGap: '1px'}}>
      {children}
    </div>
  );
}

function ApartmentItem({pics, price, name, type, beds, stars }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SlideShow pics={pics} />
      <div style={{ fontSize: '18px', width: '280px', fontFamily: 'Helvetica', color: '#48484', paddingTop: '10px'}}>
        <h4 style={{ margin: '0' }}>From ${price} · {name}</h4>
        <h5 style={{ margin: '0', fontWeight: '300', paddingTop: '3px' }}>{type} · {beds} beds</h5>
        <Stars stars={stars} />
      </div>
    </div>
  );
}

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


class App extends Component {
  state = {
    activeMenu: null,

    entireRoomOption: false,
    privateRoomOption: false,
    sharedRoomOption: false,

    adultGuestsQty: 1,
    childrenGuestsQty: 0,
    infantsGuestsQty: 0,

    instantBook: false,

    apartments: [
      { id: 1, price: 10, name: 'Amazing flat', type: 'Entire apartment', beds: 2, stars: 5,
        pics: [
          'https://a0.muscache.com/im/pictures/af757c0a-28d6-49f3-8ed1-85fb713e3a6a.jpg?aki_policy=xx_large',
          'https://a0.muscache.com/im/pictures/1546d912-88d8-41de-9ee6-27eda2d06549.jpg?aki_policy=xx_large',
          'https://a0.muscache.com/im/pictures/0d849b40-237d-4bc9-92b5-cc5e76239129.jpg?aki_policy=x_large',
        ]
      },
      { id: 2, price: 40, name: 'Аlat', type: 'Entire apartment', beds: 3, stars: 3, pics: ['https://a0.muscache.com/im/pictures/af757c0a-28d6-49f3-8ed1-85fb713e3a6a.jpg?aki_policy=xx_large'] },
      { id: 3, price: 50, name: 'Fgags', type: 'Entire apartment', beds: 4, stars: 2, pics: ['https://a0.muscache.com/im/pictures/af757c0a-28d6-49f3-8ed1-85fb713e3a6a.jpg?aki_policy=xx_large'] },
    ],
  };

  toggleMenu = (menu) => () => {
    this.setState({ activeMenu: this.state.activeMenu ? (menu === this.state.activeMenu ? null : menu) : menu });
  }

  chooseRoomType = (entireRoom, privateRoom, sharedRoom) => {
    this.setState({
      entireRoomOption: entireRoom,
      privateRoomOption: privateRoom,
      sharedRoomOption: sharedRoom,
    });
  }

  chooseGuestsQty = (adultGuests, childrenGuests, infantsGuests) => {
    this.setState({
      adultGuestsQty: adultGuests,
      childrenGuestsQty: childrenGuests,
      infantsGuestsQty: infantsGuests,
    })
  }

  chooseInstantBook = (isActive) => {
    this.setState({
      instantBook: isActive,
    })
  }


  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '13px 10px', borderBottom: '1px solid #ddd' }}>
          <MenuItem label="Room type" onClick={this.toggleMenu('room_type')} isOpen={this.state.activeMenu === 'room_type'}>
            <RoomTypeMenu
              onSelect={this.chooseRoomType}
              onApply={this.toggleMenu('room_type')}
              onCancel={this.toggleMenu('room_type')}
              activeEntire={this.state.entireRoomOption}
              activePrivate={this.state.privateRoomOption}
              activeShared={this.state.sharedRoomOption}
            />
          </MenuItem>

          <MenuItem label="Guests" onClick={this.toggleMenu('guests')} isOpen={this.state.activeMenu === 'guests'}>
            <GuestsMenu
              adultGuestsQty={this.state.adultGuestsQty}
              childrenGuestsQty={this.state.childrenGuestsQty}
              infantsGuestsQty={this.state.infantsGuestsQty}
              onChange={this.chooseGuestsQty}
              onApply={this.toggleMenu('guests')}
              onCancel={this.toggleMenu('guests')}
            />
          </MenuItem>

          <MenuItem label="Price range" onClick={this.toggleMenu('price_range')} isOpen={this.state.activeMenu === 'price_range'}>
            <PriceRangeMenu
              minPrice={100}
              maxPrice={200}
              width={150}
            />
          </MenuItem>

          <MenuItem label="Instant book" onClick={this.toggleMenu('instant')} isOpen={this.state.activeMenu === 'instant'}>
            <InstantBookMenu
              instantBook={this.state.instantBook}
              onSelect={this.chooseInstantBook}
              onApply={this.toggleMenu('instant')}
              onCancel={this.toggleMenu('instant')}
            />
          </MenuItem>
        </div>

        <div style={{ webkitFilter: this.state.activeMenu ? 'blur(5px)' : undefined, transition: '0.3s all', padding: '13px 24px' }}>
          <ApartmentGrid>
            {this.state.apartments.map(apartment => (
              <ApartmentItem
                key={apartment.id}
                pics={apartment.pics}
                price={apartment.price}
                name={apartment.name}
                type={apartment.type}
                beds={apartment.beds}
                stars={apartment.stars}
              />
            ))}
          </ApartmentGrid>
        </div>
      </div>
    );
  }
}

export default App;
