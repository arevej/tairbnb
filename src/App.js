import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Stars from './Stars';
import SlideShow from './SlideShow';
import MenuItem from './MenuItem';
import RoomTypeMenu from './RoomTypeMenu';
import GuestsMenu from './GuestsMenu';
import InstantBookMenu from './InstantBookMenu';
import PriceRangeMenu from './PriceRangeMenu';

import './App.css';

function ApartmentGrid({children}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: '1px', gridRowGap: '1px'}}>
      {children}
    </div>
  );
}

function ApartmentItem({id, pics, price, name, type, beds, stars }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SlideShow pics={pics} />
      <Link to={"/apartment/" + id } style={{ fontSize: '18px', width: '280px', fontFamily: 'Helvetica', color: '#48484', paddingTop: '10px', textDecoration: 'none' }}>
        <h4 style={{ margin: '0' }}>From ${price} · {name}</h4>
        <h5 style={{ margin: '0', fontWeight: '300', paddingTop: '3px' }}>{type} · {beds} beds</h5>
        <Stars stars={stars} />
      </Link>
    </div>
  );
}


class ApartmentList extends Component {
  state = {
    activeMenu: null,

    entireRoomOption: false,
    privateRoomOption: false,
    sharedRoomOption: false,

    adultGuestsQty: 1,
    childrenGuestsQty: 0,
    infantsGuestsQty: 0,

    instantBook: false,
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
            {this.props.apartments.map(apartment => (
              <ApartmentItem
                key={apartment.id}
                id={apartment.id}
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

function Apartment({ apartment }) {
  return (
    <h1>{apartment.name}</h1>
  );
}


class App extends Component {
  state = {
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

  render() {
    return (
      <div>
        <Route path="/" exact render={() => <ApartmentList apartments={this.state.apartments} />} />
        <Route path="/apartment/:apartmentId" render={({ match: { params } }) => {
          const openApartment = this.state.apartments.filter(apt => apt.id === parseInt(params.apartmentId))[0];
          return <Apartment apartment={openApartment} />
        }} />
      </div>
    );
  }
}

export default App;
