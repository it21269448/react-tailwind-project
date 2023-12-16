import React from 'react';
import backgroundImg from '../assets/bgPhoto.png'; 

function HeroSection() {
  const heroSectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '763px', 
    position: 'relative'
  };

  const callToActionStyle = {
    backgroundColor: '#1CBDDD', 
    background: 'linear-gradient(90deg, #1CBDDD 0%, #4DCA79 100%)', 
    color: '#FFFFFF', 
    borderRadius: '10px', 
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '630px', 
    position: 'absolute',
    bottom: '80px', 
    left: '80px', 
    padding: '24px 40px 32px 40px', 
  };

  const headingStyle = {
    fontWeight: '700',
    fontSize: '48px', 
    lineHeight: '48px', 
    letterSpacing: '-0.02em',
    margin: '0 0 20px 0', 
    maxWidth: '555px', 
  };

  const buttonStyle = {
    backgroundColor: '#F28D35', 
    padding: '12px 20px', 
    borderRadius: '4px', 
    fontWeight: '700', 
    fontSize: '14px', 
    lineHeight: '14px', 
    letterSpacing: '-0.02em', 
    color: '#FFFFFF', 
    border: 'none', 
    cursor: 'pointer', 
    marginTop: '20px', 
    width: '214px', 
  };

  const frame = {
    position: 'absolute',
    bottom: '80px', 
    left: '80px', 
    padding: '24px 40px 32px 40px', 
    background: 'linear-gradient(to right, #1CBDDD, #4DCA79)', 
    color: '#FFFFFF', 
  }

  return (
    <div style={heroSectionStyle}>
      <div style={callToActionStyle}>
        <h1 style={headingStyle}>
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button style={buttonStyle}>
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
}

export default HeroSection;