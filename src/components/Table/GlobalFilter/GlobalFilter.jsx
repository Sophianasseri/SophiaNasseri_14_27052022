import { useState } from 'react';
import { useAsyncDebounce } from 'react-table/';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  //Debounce for better parformance
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);

  return (
    <div className="search-filter">
      <span>Search :</span>
      <label htmlFor="search"></label>
      <input
        id="search"
        className="search-input"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default GlobalFilter;
