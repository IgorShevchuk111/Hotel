import { HiSquare2Stack } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';

function DuplicateCabin({ cabin }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { name, maxCapacity, description, regularPrice, discount, image } =
    cabin;

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
    <div>
      <button disabled={isCreating} onClick={handleDuplicate}>
        <HiSquare2Stack />
      </button>
    </div>
  );
}

export default DuplicateCabin;
