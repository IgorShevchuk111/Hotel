import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

function CabinTableOperations() {
  const optionsData = [
    { value: 'all', label: 'All' },
    { value: 'no-discount', label: 'No discount' },
    { value: 'with-discount', label: 'With discount' },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={optionsData} />
    </TableOperations>
  );
}

export default CabinTableOperations;
