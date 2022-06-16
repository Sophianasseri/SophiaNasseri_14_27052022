import { useState } from 'react';
import { useAsyncDebounce } from 'react-table/';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  //Debounce for better parformance
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);

  return (
    <span>
      Search :{' '}
      <input
        className="search-input"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      ></input>
    </span>
  );
};

export default GlobalFilter;
