import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../../services/apiSettings"

export const useSetting=()=>{
   const{isLoading,error,data:settings}= useQuery({
        queryKey:['set'],
        queryFn:getSettings
    })
    return {isLoading,settings,error}
}