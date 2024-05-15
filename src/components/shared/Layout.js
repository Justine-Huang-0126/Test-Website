
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import styled from "styled-components"

const Layout = (props) => {
  // const pageTitle = props.pageTitle
  const children = props.children

  
	return (
		<>
      <Global>{children}</Global>
		</>
	)
}

export default Layout

const Global = styled.div`
	background-color: #290029;
`