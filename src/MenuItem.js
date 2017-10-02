import React, { Component } from 'react';

function MenuButton({ label, arrow, onClick, isOpen }) {
  return (
    <div className='menu-button' style={{ background: isOpen ? '#eee' : 'transparent' }} onClick={onClick}>
      {label}
      <span style={{ paddingLeft: 5, color: '#444', fontSize: 12}}>{arrow}</span>
    </div>
  )
}

function MenuContent({ children}) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ border: '1px solid #ccc', padding:"15px 20px",  borderRadius: 5, position: 'absolute', top: 10, left: 0, zIndex: 100, width: 340, backgroundColor: '#fff' }}>
        {children}
      </div>
    </div>
  );
}

function MenuItem({ label, arrow, onClick, isOpen, children }) {
  return (
    <div>
      <MenuButton label={label} arrow={arrow} onClick={onClick} isOpen={isOpen} />
      {isOpen ? (
        <MenuContent>
          {children}
        </MenuContent>
      ) : null}
    </div>
  );
}

export default MenuItem;