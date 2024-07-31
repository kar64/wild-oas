import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export const useEditCabin=()=>{
    const queryClient = useQueryClient();
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createCabin(newCabinData, id),
        onSuccess: () => {
          toast.success("Cabin successfully edited");
          queryClient.invalidateQueries({ queryKey: ["cab"] });
        //   reset();
        },
        onError: (err) => toast.error(err.message),
      });
      return{editCabin,isEditing}
}