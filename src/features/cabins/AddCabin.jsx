import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";
import { CabinTable } from "./CabinTable";

export const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

// export const AddCabin = () => {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <>
//     <Button
//     onClick={() => {
//         setIsOpenModal((sh) => !sh);
//     }}
//     >
//     Add new cabin
//   </Button>
//   {isOpenModal&&<Modal setIsOpenModal={setIsOpenModal}><CreateCabinForm setIsOpenModal={setIsOpenModal}/></Modal>}
//       </>
//   )
// }
