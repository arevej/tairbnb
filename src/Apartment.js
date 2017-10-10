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
            <a href='#' className='translate-button'>Translate this description to other language</a>
            <div className='description' dangerouslySetInnerHTML={{__html: apartment.description}} />
            <a href='#' className='text-button'>Contact host</a>
            <div className='line'></div>
          </div>
          <div style={{ backgroundColor: '#ccc', width: 350 }}>
          </div>
        </div>
      </div>
    )
  };
}

export default Apartment;
