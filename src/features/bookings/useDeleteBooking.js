import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBooking } from "../../services/apiBookings"

export const useDeleteCabin=()=>{

    
    const queryClient=useQueryClient()
    
    const{isLoading,mutate}=useMutation({
        mutationFn:(id)=>deleteBooking(id),
        onSuccess:()=>{
            toast.success('Booking successfullfy delete')
            queryClient.invalidateQueries({
                queryKey:['book']
            })
        },
        onError:(err)=>toast.error(err.message)
    })
    return{isLoading,mutate}
}