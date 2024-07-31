import { useMutation } from "@tanstack/react-query"
import { signup } from "../../services/apiAuth"
import toast from "react-hot-toast"

export const useSignup=()=>{
    const{mutate,isLoading}=useMutation({
        mutationFn:signup,
        onSuccess:()=>{
            toast.success('Account successfully created!')
        },
       
    })
    return {mutate,isLoading}
}