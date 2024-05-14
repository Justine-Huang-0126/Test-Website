import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import React, { useState, useRef, useEffect } from "react"
import Test from "../components/home/Test"
import Hero from "../components/home/Hero"

const IndexPage = () => {
  const [navbar, setNavbar] = useState(false)
  const scrollRef = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
        // setNavbar(window.scrollY > window.innerHeight )
        setNavbar(window.scrollY > window.innerHeight )
        console.log("window.scrollY", window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []
  )

  const handleScrollDown = () => {
	
		scrollRef.current.scrollIntoView({ 
      behavior: 'smooth'
		})

		setNavbar(true)
	}

  return (
    <>
      <Layout>
        <NavBar navbar={navbar}/>
        <Hero handleScrollDown={handleScrollDown} navbar={navbar}/>
        <Test scrollRef={scrollRef}/>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>My Test Website</title>