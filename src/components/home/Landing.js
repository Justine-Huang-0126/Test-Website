import * as React from "react"
import styled from "styled-components";
import bg from "../../images/bg_space.jpg"
import Page1 from "../features/Page1";
import Page2 from "../features/Page2";
import Page3 from "../features/Page3";

const Landing = ({scrollRef}) => {
	return(
		<LandingDiv className="container-fluid p-0 section" ref={scrollRef}>
			<Page1/>
			<Page2/>
			<Page3/>
		</LandingDiv>
	)
}

export default Landing;

const LandingDiv = styled.div`
	// height: 100vh;

	/* background-image: url(${bg});
	// background-color: #290029;
	height: 100vh;

	.bg-mask {
		position: absolute;
		width: inherit;
		height: inherit;
		//background: rgba(69, 42, 94, 0.5);
	}

	.landing-col {
		margin-top: 100px;
	} */
`