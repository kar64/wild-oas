import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

export const useCheckinOut=()=>{
    const queryClient=useQueryClient()
    const{mutate:checkinout,isLoading:isCheckinout}=useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId,{
            status:'checked-out',
           
    }),
    onSuccess:(data)=>{
        toast.success(`Booking #${data.id} successfully checkinout`)
        queryClient.invalidateQueries({active:true})
    },
    onError:()=>toast.error('There was an error while checkinout')
    })
    return{checkinout,isCheckinout}
}