import React, { Component } from 'react';

import Stars from './Stars';
import SlideShow from './SlideShow';
import MenuItem from './MenuItem';
import RoomTypeMenu from './RoomTypeMenu';
import GuestsMenu from './GuestsMenu';

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


class App extends Component {
  state = {
    activeMenu: null,

    entireRoomOption: false,
    privateRoomOption: false,
    sharedRoomOption: false,

    adultGuestsQty: 1,
    childrenGuestsQty: 0,
    infantsGuestsQty: 0,

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

  chooseOption = (option) => () => {
    this.setState({ [option]: !this.state[option] });
  }

  addAdultGuest = () => {
    this.setState({ adultGuestsQty: this.state.adultGuestsQty + 1 })
  }

  reduceAdultGuest = () => {
    this.setState({ adultGuestsQty: this.state.adultGuestsQty - 1 })
  }

  addGuest = (guest) => () => {
    this.setState({ [guest]: this.state[guest] + 1 })
  }

  reduceGuest = (guest) => () => {
    this.setState({ [guest]: this.state[guest] - 1 })
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '13px 10px', borderBottom: '1px solid #ddd' }}>
          <MenuItem label="Room type" arrow={this.state.activeMenu === 'room_type' ? ('ᗗ') : 'ᗖ'} onClick={this.toggleMenu('room_type')} isOpen={this.state.activeMenu === 'room_type'}>
            <RoomTypeMenu
              onClickEntire={this.chooseOption('entireRoomOption')}
              onClickPrivate={this.chooseOption('privateRoomOption')}
              onClickShared={this.chooseOption('sharedRoomOption')}
              activeEntire={this.state.entireRoomOption}
              activePrivate={this.state.privateRoomOption}
              activeShared={this.state.sharedRoomOption}
            />
          </MenuItem>

          <MenuItem label="Guests" arrow={this.state.activeMenu === 'guests' ? ('ᗗ') : 'ᗖ'} onClick={this.toggleMenu('guests')} isOpen={this.state.activeMenu === 'guests'}>
            <GuestsMenu
              adultGuestsQty={this.state.adultGuestsQty}
              childrenGuestsQty={this.state.childrenGuestsQty}
              infantsGuestsQty={this.state.infantsGuestsQty}
              addAdultGuest={this.addAdultGuest}
              reduceAdultGuest={this.reduceAdultGuest}
              addChildrenGuest={this.addGuest('childrenGuestsQty')}
              reduceChildrenGuest={this.reduceGuest('childrenGuestsQty')}
              addInfantsGuest={this.addGuest('infantsGuestsQty')}
              reduceInfantsGuest={this.reduceGuest('infantsGuestsQty')}
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
