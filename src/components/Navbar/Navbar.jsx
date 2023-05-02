import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { animate, motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';
import { socialIcons } from '../../Data';
const Navbar = () => {
    
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
              <div className="logo">
                    <h3>A</h3>
              </div>
              <ul
                      className="nav_links"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                  })}
              </ul>
              <div className="social_icons" >
                  {socialIcons.map((socialIcon, index) => {
                  return (
                      <div key={index}>
                          {socialIcon}
                      </div>
                  )
              })}
              </div>
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar