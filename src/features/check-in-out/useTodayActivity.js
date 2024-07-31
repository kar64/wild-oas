import { useQuery } from "@tanstack/react-query"
import { getStaysTodayActivity } from "../../services/apiBookings"

export const useTodayActivity=()=>{
    const{isLoading,data:activitys}=useQuery({
        queryFn:getStaysTodayActivity,
        queryKey:['today-activity']
    })
    return {isLoading,activitys}
}