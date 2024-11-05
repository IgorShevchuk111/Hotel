import { HiPencil } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

function EditCabin({ cabin }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit-cabin-form">
          <button>
            <HiPencil />
          </button>
        </Modal.Open>
        <Modal.Window name="edit-cabin-form">
          <CreateCabinForm cabinToEdit={cabin} />
        </Modal.Window>{' '}
      </Modal>
    </div>
  );
}

export default EditCabin;
