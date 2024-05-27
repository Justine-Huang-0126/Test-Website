import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

const Hero = (props) => {

	const handleScrollDown = props.handleScrollDown
	const navbar = props.navbar

	return(
		<Herocontainer className="container-fluid hero-container py-0 px-0 section">
			<HeroImage className="image-mask-wrapper">
				<StaticImage
					className="hero-img"
					src="../../images/hero_image.jpg"
					alt="Hero"
					placeholder="none"
				/>
			</HeroImage>
			<div className={"hero_logo_text" + ( navbar ? " hidden" : " visible")}>
				<HeroLogo>
					<StaticImage
						// className="hero-logo"
						src="../../images/test_logo_2.png"
						alt="Logo"
						placeholder="none"
					/>
				</HeroLogo>
				<HeroText className="display-1 align-center">
					Hi! This is a Test Website
				</HeroText>
			</div>
			<ScrollButton onClick={ handleScrollDown }>
				<div>
					<span></span>
				</div>
			</ScrollButton>
		</Herocontainer>
	)
}

export default Hero

const Herocontainer = styled.div`

	.hidden{
		opacity: 0;
		visibility: hidden;
	}

	.visible{
		opacity: 1;
		visibility: visible;
	}

	.hero_logo_text{
		transition: opacity 0.5s ease-in-out;
		opacity: 1;
		background-color: #290029;
	}
`

const HeroImage = styled.div`
	position: relative;
	display: inline-block;
	width: inherit;
	margin: 0;
	padding: 0;

	.hero-img {
		width: inherit;
		height: 100vh;
		margin: 0;
		padding: 0;
	}

	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(69, 42, 94, 0.5);
		pointer-events: none;
	}
`


const HeroText = styled.div`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #F0FFF1;
`
const HeroLogo = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	scale: 50%;
	transform: translate(-100%, -100%);
`

const ScrollButton = styled.div`
  width: 100%;
  position: relative;
  div span {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    background: #fff;
    border-radius: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }

  div span::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 2px solid #0073af;
    border-bottom: 2px solid #0073af;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }

  div span::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    content: "";
    width: 44px;
    height: 44px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: sdb03 3s infinite;
    animation: sdb03 3s infinite;
    box-sizing: border-box;
  }

  @keyframes sdb03 {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`