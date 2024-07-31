import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import ButtonIcon from "./ButtonIcon"
import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export const DarkModeToogle = () => {
    const{isDarkMode,toogleDarkMode}=useContext(DarkModeContext)
  return (
   <ButtonIcon onClick={()=>toogleDarkMode()}>
    {isDarkMode?<HiOutlineSun/>:<HiOutlineMoon/>}
   </ButtonIcon>
  )
}
