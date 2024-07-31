import Button from "../../ui/Button";
import { useCheckinOut } from "./useCheckinout";

function CheckoutButton({ bookingId }) {
  const{isCheckinout,checkinout}=useCheckinOut()
  return (
    <Button 
    variation="primary" 
    size="small"
    onClick={()=>checkinout(bookingId)}
    disabled={isCheckinout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
