import { HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteCabin } from './useDeleteCabin';

function DeleteCabin({ cabinId, imagePath }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  return (
    <div>
      <Modal>
        <Modal.Open opens="delete">
          <button>
            <HiTrash />
          </button>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="cabins"
            onConfirm={() => deleteCabin({ id: cabinId, imagePath: imagePath })}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default DeleteCabin;
