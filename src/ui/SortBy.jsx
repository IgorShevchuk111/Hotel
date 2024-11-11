import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ optionsSortData }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      optionsSortData={optionsSortData}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
