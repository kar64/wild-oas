import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

export const useCabins=()=>{
    const {isLoading,data:cabins,error}=useQuery({
        queryKey:['cab'],
        queryFn:getCabins
      })
      return{isLoading,cabins,error}
}