
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import styled from "styled-components"


const NavBar = ({navbar}) => {

	const logo_width = 75

	return (
		<Fadein>
			<nav className={"navbar navbar-expand-sm fixed-top" + (navbar ? " visible" : " hidden")}>
				<div className="container-fluid">
					<StaticImage
						className="navbar-brand logo contain ps-5"
						src="../../images/test_logo_2_cream.png"
						alt="Logo"
						width={logo_width}
						objectFit="contain"
					/>
					<ul className="navbar-nav pe-4">
						<li className="nav-item">
							<Link to="/" className="nav-link px-5">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link px-5">Projects</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link px-5">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link px-5">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Fadein>
	)
}

export default NavBar

const Fadein = styled.div`
	.navbar{
		transition: opacity 0.5s ease-in-out;
		opacity: 1;
		background-color: #290029;
	}

	.hidden{
		opacity: 0;
		visibility: hidden;
	}

	.visible{
		opacity: 1;
		visibility: visible;
	}
	
	.logo {
		width: fit-content;
	}

	.logo::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
	}
	
	.nav-link {
		color: #F0FFF1
	}
`

