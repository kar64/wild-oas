import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export const useCreateCabin=()=>{
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation({
      mutationFn: createCabin,
      onSuccess: () => {
        toast.success("New cabin successfully created");
        queryClient.invalidateQueries({ queryKey: ["cab"] });
        // reset();
      },
      onError: (err) => toast.error(err.message),
    });
    return{mutate,isLoading}
}