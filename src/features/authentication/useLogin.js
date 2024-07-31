import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient=useQueryClient()
  const navigate = useNavigate();
  const { mutate: log, isLoading: isLog } = useMutation({
    mutationFn: ({ email, password }) => login({email, password}),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'],user.user)
      navigate("/dashboard",{replace:true});
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provider email or password are incorrect");
    },
  });
  return { log, isLog };
};
