import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constans";

export const useBookings = () => {
  const queryClient=useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams();
  const filterBooking = searchParams.get("status");
  const filter =
    !filterBooking || filterBooking === "all"
      ? null
      : { field: "status", value: filterBooking };

  const sortBooking = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortBooking.split("-");
  const sort = { field, direction };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count }={},
    error,
  } = useQuery({
    queryKey: ["book", filter, sort,page],
    queryFn: () => getBookings({ filter, sort ,page}),
  });
  const pageCount=Math.ceil(count/PAGE_SIZE)
if(page<pageCount)
queryClient.prefetchQuery({
  queryKey: ["book", filter, sort,page+1],
  queryFn: () => getBookings({ filter, sort ,page:page+1}),
})
if(page>1)
queryClient.prefetchQuery({
  queryKey: ["book", filter, sort,page-1],
  queryFn: () => getBookings({ filter, sort ,page:page-1}),
})

  return { isLoading, bookings, error, count };
};
