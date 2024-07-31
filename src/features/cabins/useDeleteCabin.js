import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteCabin } from "../../services/apiCabins"

export const useDeleteCabin=()=>{

    
    const queryClient=useQueryClient()
    
    const{isLoading,mutate}=useMutation({
        mutationFn:(id)=>deleteCabin(id),
        onSuccess:()=>{
            toast.success('Cabin successfullfy delete')
            queryClient.invalidateQueries({
                queryKey:['cab']
            })
        },
        onError:(err)=>toast.error(err.message)
    })
    return{isLoading,mutate}
}