import { HiArrowRightOnRectangle } from "react-icons/hi2"
import ButtonIcon from "../../ui/ButtonIcon"
import { useLogout } from "./useLogout"
import SpinnerMini from "../../ui/SpinnerMini"

export const Logout = () => {
    const{mutate,isLoading}=useLogout()
  return (
    <ButtonIcon disabled={isLoading} onClick={mutate}>{!isLoading?<HiArrowRightOnRectangle/>:<SpinnerMini/>}</ButtonIcon>
  )
}
