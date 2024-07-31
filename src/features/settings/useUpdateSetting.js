import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting } from "../../services/apiSettings"
import toast from "react-hot-toast"

export const useUpdateSetting=()=>{
    const queryClient=useQueryClient()

   const {mutate,isLoading}= useMutation({
    mutationFn:updateSetting,
    onSuccess:()=>{
        toast.success('Update settings'),
        queryClient.invalidateQueries({
            queryKey:['set']
        })
    },
    onError:(err)=>toast.error(err.message)
   })
   return {isLoading,mutate}
}