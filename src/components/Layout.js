
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from "react"

const Layout = (props) => {
  // const pageTitle = props.pageTitle
  const children = props.children

  
	return (
		<>
      {children}
		</>
	)
}

export default Layout
