
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from "react"
import Fade from 'react-bootstrap/Fade';

const NavBar = ({navbar}) => {

	const logo_width = 150

	return (
		<Fade in={navbar} >
			<nav className="navbar navbar-expand-sm bg-light fixed-top">
				<div className="container-fluid">
					<StaticImage
						className="navbar-brand logo"
						src="../images/test_logo_big.png"
						alt="Logo"
						width={logo_width}
					/>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">Projects</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Fade>
	)
}

export default NavBar

