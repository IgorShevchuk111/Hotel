import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteCabin } from './useDeleteCabin';
import { useCreateCabin } from './useCreateCabin';

function CabinMenu({ cabin }) {
  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
    id: cabinId,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      description,
      regularPrice,
      discount,
      image,
    });
  }
  return (
    <Modal>
      <Menus.Menu>
        <Menus.Toggle id={cabinId} />

        <Menus.List id={cabinId}>
          <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
            Duplicate
          </Menus.Button>

          <Modal.Open opens="edit-cabin-form">
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
          </Modal.Open>

          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Modal.Open>
        </Menus.List>
      </Menus.Menu>

      <Modal.Window name="edit-cabin-form">
        <CreateCabinForm cabinToEdit={cabin} />
      </Modal.Window>

      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="cabins"
          onConfirm={() => deleteCabin({ id: cabinId, imagePath: image })}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default CabinMenu;
