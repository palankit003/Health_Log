import background from "../assets/background2.png"
import Style from "./Background.module.css"
const Background = () => {
  return (
    <img src={background} className={Style.background}></img>
  )
}

export default Background