import React from 'react'

const HeadingTick = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        gap: '16px',
        position: 'absolute',
        width: '52px',
        height: '52px',
        right: '200px',
        top: '50px',
        transform: 'rotate(-16deg)',
        zIndex: 20,
      }}
    >
      <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0349 3.77023C13.8915 3.12086 13.4777 3.56424 8.60051 12.464C4.02278 20.773 3.8091 21.4111 5.39049 21.8953C8.24846 22.8069 9.10948 21.9109 14.3814 12.5012C18.6692 4.81631 18.8733 4.14467 17.0349 3.77023Z" fill="#CC7A00"/>
        <path d="M30.8644 24.5811C28.2194 22.2741 28.2147 22.3836 18.4754 25.8976C11.2875 28.4997 9.66 29.6155 10.9089 30.9524C12.2959 32.3939 12.6482 32.365 21.9358 29.4134C30.733 26.6383 32.4943 25.9891 30.8644 24.5811Z" fill="#CC7A00"/>
      </svg>
    </div>
  );
};

export default HeadingTick;
