import React, { Component } from 'react';

import Stars from './Stars'

import './Apartment.css';

function StickyMenu({ }) {
  return (
    <div>
      <div className="sticky-menu">
        <a href='#' className="active">Overview</a>
        <a href='#'>Reviews</a>
        <a href='#'>The Host</a>
        <a href='#'>Location</a>
      </div>
    </div>
  )
};

function MainInfoBox ({ name, type, city, stars, reviewCount, guests, bedrooms, beds, bath, owner, ownerPic}) {
  return (
    <div className='main-info-box'>
      <div>
        <h1>{name}</h1>
        <p className='sub-header-links'>
          <a href='#'>{type}</a>
          <a href='#'>{city}</a>
          <a href='#'>
            <Stars stars={stars} />
            {reviewCount} reviews
          </a>
        </p>
        <p className='main-info'>
          <span>👤 {guests} guests</span>
          <span>🚪 {bedrooms} bedrooms</span>
          <span>🛏 {beds} beds</span>
          <span>🛁 {bath} bath</span>
        </p>
      </div>
      <div className='owner-pic'>
        <img src={ownerPic}/>
        <span>{owner}</span>
      </div>
    </div>
  )
}

function OutlineButton({ label, onClick }) {
  return (
    <a href='#' className='outline-button' onClick={onClick}>{label}</a>
  )
}

function Line({ }) {
  return (
    <div className='line'></div>
  )
}

function InfoBlock({ header, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4 className='services-header'>{header}</h4>
      {children}
    </div>
  )
}

function InfoColumnsBlock({ header, children }) {
  return (
    <div>
      <h4 className='services-header'>{header}</h4>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {children}
      </div>
    </div>
  )
}


class Apartment extends Component {
  state = {

  };

  render() {
    const { apartment } = this.props
    return (
      <div>
        <div>
          <div className='main-pic' style={{ backgroundImage: `url(${apartment.pics[0]})` }} />
        </div>
        <div className='container'>
          <div style={{ flex: 1, marginRight: 20 }}>
            <StickyMenu />
            <MainInfoBox
              name={apartment.name}
              type={apartment.type}
              city={apartment.city}
              stars={apartment.stars}
              guests={apartment.guests}
              bedrooms={apartment.bedrooms}
              beds={apartment.beds}
              bath={apartment.bath}
              reviewCount={14}
              owner='Irene'
              ownerPic='https://a0.muscache.com/im/pictures/93404f7f-bd52-480f-ab68-ed4f19367261.jpg?aki_policy=profile_x_medium'
            />
            <OutlineButton label='Translate this description to other language' />
            <div className='description' dangerouslySetInnerHTML={{__html: apartment.description}} />
            <a href='#'>Contact host</a>
            <Line />
            <InfoColumnsBlock header='Amenities'>
              <div className='column'>
                <span>Pets allowed</span>
                <span>Elevator</span>
                <span>Internet</span>
                <span>Kitchen</span>
                <span>Pool</span>
                <span>Gym</span>
                <span>Wheelchair accessible</span>
                <span>Wireless Internet</span>
                <span>Smoking allowed</span>
                <span>Family/kid friendly</span>
                <span>Indoor fireplace</span>
                <span>Free parking on premises</span>
                <span>Hot tub</span>
                <span>Breakfast</span>
                <span>Dryer</span>
                <span>Suitable for events</span>
              </div>
              <div className='column'>
                <span>Hair dryer</span>
                <span>Air conditioning</span>
                <span>Buzzer/wireless intercom</span>
                <span>Hangers</span>
                <span>Iron</span>
                <span>Laptop friendly workspace</span>
                <span>Heating</span>
                <span>Shampoo</span>
                <span>TV</span>
                <span>Washer</span>
                <span>Cable TV</span>
                <span>Essentials</span>
                <span>Paid parking off premises</span>
                <span>Private entrance</span>
                <span>Free parking on street</span>
                <span>Doorman</span>
              </div>
            </InfoColumnsBlock>
            <Line />
            <InfoColumnsBlock header='Prices'>
              <div className='column'>
                <span>Extra people <b>${apartment.extraPeoplePrice} / night after the first guest</b></span>
                <span>Cleaning Fee <b>${apartment.cleaningFee}</b></span>
              </div>
              <div className='column'>
                <span>Security Deposit <b>${apartment.deposit}</b></span>
              </div>
            </InfoColumnsBlock>
            <div className='payment-info'>
              <h4>Always communicate through Airbnb</h4>
              <span>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>
              <div>
                <a href='#'>Learn more</a>
              </div>
            </div>
            <Line />
            <InfoBlock header='Sleeping arrangements'>
              <span>🛏</span>
              <b>Common spaces</b>
              <span>1 sofa bed, 1 bunk bed</span>
            </InfoBlock>
            <Line />
            <InfoBlock header='House Rules'>
              <span>No smoking</span>
              <span>Not suitable for pets</span>
              <span>No parties or events</span>
              <span>Check in time is 3PM - 8PM</span>
              <span>Check out by 11AM</span>
            </InfoBlock>
            <Line />
            <InfoBlock header='Cancellations'>
              <span>This host has a <b>Moderate Cancellation Policy</b></span>
              <span>Cancel up to 7 days before your trip and get a full refund. Cancel within 7 days of the trip and get a 50% refund of the nightly rate, as well as a full refund of fees.</span>
              <div>
                <a href='#'>View details</a>
              </div>
            </InfoBlock>

            <Line />
            <InfoBlock header='Accessibility'>
              <span>Elevator</span>
            </InfoBlock>
            <Line />
            <div>
              <h4 className='services-header'>Availability</h4>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <span style={{ flex: 1}}><b>1 night</b> minimum stay</span>
                <div style={{ flex: 1}}>
                  <a href='#'>View calendar</a>
                </div>
              </div>
            </div>
            <Line />
            //<div>
            //  <h2>
            //    {apartment.reviewCount === 0 ? 'No reviews (yet)' : apartment.reviewCount + ' reviews'}
            //    <Stars stars={apartment.stars} />
            //  </h2>
            //</div>

          </div>
          <div style={{ backgroundColor: '#ccc', width: 350 }}>
          </div>
        </div>
      </div>
    )
  };
}

export default Apartment;
