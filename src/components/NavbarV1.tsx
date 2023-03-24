import Style from "./NavbarV1.module.css"
import { useState,useEffect } from "react"
import logo from "../assets/logo.png"
const NavbarV1 = () => {
  const[toggle,setToggle] = useState(false)
  useEffect(() => {
    if(toggle){

    }
  }, [toggle])
  
  return (
    <>
    <div className={Style.wrapper}>
    <div className={Style.container}>
      <div className={Style.logo}>
        <img src={logo}></img>
      </div>
      <div className={Style.linkContainer}>
      <div className={Style.navIcon} onClick={()=>setToggle((prev)=>!prev)}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
    {toggle?
      <div className={Style.mobileLinks}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Login</p>
        </div>
    
    :""}
    </div>
    </>
  )
}

export default NavbarV1