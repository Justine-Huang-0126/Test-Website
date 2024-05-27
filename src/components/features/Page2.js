import React, { useEffect } from 'react'
import styled from 'styled-components'
import Granim from 'react-granim'

const Page2 = () => {

	return (
		<>
			<Test className='section'>
				<Granim 
					id="granim"
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
			</Test>
		</>
	)
}

export default Page2

const Test = styled.div`
	height: 100dvh;
	position: relative;

`