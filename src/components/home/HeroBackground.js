import React from 'react'
import styled from 'styled-components';
import Granim from 'react-granim'

const HeroBackground = () => {

  return (
    <Stars id="space">
      <Granim 
        id="granim-hero"
        direction="diagonal"
        states={{
          "default-state": {
            gradients: [
              ['#23074d', '#cc5333'],
              ['#1a2a6d', '#520276'],
              ['#0f0c29', '#302b63'],
              ['#1a2a6d', '#920042'],
            ],
            transitionSpeed: 2000,
            loop: true
          }
        }}
        isPausedWhenNotInView={true}
        opacity={[0.8, 1, 0.5, 0.8]}
      />
      <h1 className='text-white'>For Practice only...</h1>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
    </Stars>
  )
}

export default HeroBackground

const Stars = styled.div`
  height: 100vh;
  align-content: center;
  text-align: center;

  overflow: hidden;
  position: relative;
  //height: inherit;

  .stars {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-image: 
      radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 200px 200px;
    animation: zoom 5s infinite;
    opacity: 0;
  }

  .stars:nth-child(1) {
    background-position: 50% 50%;
    animation-delay: 0s;
  }
  .stars:nth-child(2) {
    background-position: 20% 60%;
    animation-delay: 1s;
  }
  .stars:nth-child(3) {
    background-position: -20% -30%;
    animation-delay: 2s;
  }
  .stars:nth-child(4) {
    background-position: 40% -80%;
    animation-delay: 3s;
  }
  .stars:nth-child(5) {
    background-position: -20% 30%;
    animation-delay: 4s;
  }

  @keyframes zoom {
    0% {
      opacity: 0;
      transform: scale(0.5);
      animation-timing-function: ease-in;
    } 
    85% {
      opacity: 1;
      transform: scale(2.8);
      animation-timing-function: linear;
    }
    100% {
      opacity: 0;
      transform: scale(3.5);
    }
  }
`