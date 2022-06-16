import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from 'react-table';

import { mockedData } from '../../Data/data';
import { COLUMNS } from './columns';

import GlobalFilter from './GlobalFilter/GlobalFilter';

const Table = () => {
  //const [items, setItems] = useState([]);

  const getState = useSelector((state) => state.employee);
  let stateData = [];
  stateData.push(getState);
  console.log(getState);

  /* useEffect(() => {
    const employees = localStorage.getItem('employees')
      ? JSON.parse(localStorage.getItem('employees'))
      : [];
    if (employees) {
      setItems(employees);
    }
  }, []);*/
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => stateData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    preGlobalFilteredRows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const EntriesCount = () => {
    const entryStart = pageIndex * pageSize + 1;
    const entryEnd = entryStart + page.length - 1;

    return rows.length > 0 ? (
      globalFilter ? (
        <span>
          Showing {entryStart} to {entryEnd} of {rows.length} entries (filterd
          from {preGlobalFilteredRows.length} total entries)
        </span>
      ) : (
        <span>
          Showing {entryStart} to {entryEnd} of {rows.length} entries
        </span>
      )
    ) : (
      <span>No entries</span>
    );
  };

  return (
    <>
      <span>
        Show
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        entries
      </span>

      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔻' : '🔺') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <EntriesCount />
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            min={pageOptions.length - 1}
            max={pageOptions.length}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
          of {pageOptions.length}
        </span>

        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
