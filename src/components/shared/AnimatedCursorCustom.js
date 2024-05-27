import AnimatedCursor from "react-animated-cursor"
import styled from "styled-components"
import React from "react"

const AnimatedCursorCustom = () => {
  return (
    <AnimatedCursorWrapper>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'span',
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </AnimatedCursorWrapper>
  )
}

export default AnimatedCursorCustom;

const AnimatedCursorWrapper = styled.div`
  div {
    z-index: 1090 !important
  }
`