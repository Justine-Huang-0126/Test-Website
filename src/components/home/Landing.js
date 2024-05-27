import * as React from "react"
import styled from "styled-components";
import bg from "../../images/bg_space.jpg"

const Landing = ({scrollRef}) => {
	return(
		<LandingDiv className="container-fluid p-0" ref={scrollRef}>
			
		</LandingDiv>
	)
}

export default Landing;

const LandingDiv = styled.div`
	background-image: url(${bg});
	// background-color: #290029;
	height: 100vh;

	.bg-mask {
		position: absolute;
		width: inherit;
		height: inherit;
		background: rgba(69, 42, 94, 0.5);
	}

	.landing-col {
		margin-top: 100px;
	}
`