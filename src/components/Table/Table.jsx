import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from 'react-table';

import { COLUMNS } from './columns';
import { tableEntries, mockedData } from '../../Data/data';

import GlobalFilter from './GlobalFilter/GlobalFilter';

const Table = () => {
  let stateData = [...useSelector((state) => state.employees)];

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

  const SelectCustomTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#5a6f07',
        primary25: '#CDD2B8',
      },
    };
  };

  const pagesArr = [...new Array(pageOptions.length)];

  return (
    <div className="table-container">
      <div className="filter">
        <div className="entries-selection">
          <span>Show</span>
          <Select
            className="entry-select"
            options={tableEntries}
            defaultValue={tableEntries[0]}
            onChange={(e) => setPageSize(Number(e.value))}
            theme={SelectCustomTheme}
          />
          <span>entries</span>
        </div>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="column-header">
                    {column.render('Header')}

                    <div className="sort-arrows">
                      <span
                        className={`${
                          column.isSorted
                            ? column.isSortedDesc
                              ? ''
                              : 'active'
                            : ''
                        }`}
                      >
                        ▲
                      </span>
                      <span
                        className={`${
                          column.isSorted
                            ? column.isSortedDesc
                              ? 'active'
                              : ''
                            : ''
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map((row) => {
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
            })
          ) : (
            <tr>
              <td className="noData-msg" colSpan={9}>
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <EntriesCount />
        <div className={`${pageOptions < 1 ? 'hide' : ''}`}>
          <button
            className="prevNext-btn "
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <span className="page-numbers">
            {pagesArr.map((num, index) => (
              <button
                className={`page-btn ${
                  index + 1 === pageIndex + 1 ? 'active-btn' : ''
                }`}
                value={index + 1}
                onClick={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              >
                {index + 1}
              </button>
            ))}
          </span>
          <button
            className="prevNext-btn"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
