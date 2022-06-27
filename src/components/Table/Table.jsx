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
import { tableEntries } from '../../Data/data';

import GlobalFilter from './GlobalFilter/GlobalFilter';
import Pagination from './Pagination/Pagination';
import EntriesCount from './Pagination/EntriesCount/EntriesCount';
import { selectCustomTheme } from '../../utils/selectCustomTheme';

const Table = () => {
  let stateData = [...useSelector((state) => state.employees)];

  const columns = useMemo(() => COLUMNS, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className="table-container">
      <div className="filter">
        <div className="entries-selection">
          <span>Show</span>
          <label htmlFor="entries"></label>
          <Select
            inputId="entries"
            className="entry-select"
            options={tableEntries}
            defaultValue={tableEntries[0]}
            onChange={(e) => setPageSize(Number(e.value))}
            theme={selectCustomTheme}
          />
          <span>entries</span>
        </div>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
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
                <tr key={row.id} {...row.getRowProps}>
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
      <Pagination
        pageOptions={pageOptions}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        gotoPage={gotoPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
      >
        <EntriesCount
          pageIndex={pageIndex}
          pageSize={pageSize}
          rows={rows}
          page={page}
          globalFilter={globalFilter}
          preGlobalFilteredRows={preGlobalFilteredRows}
        />
      </Pagination>
    </div>
  );
};

export default Table;
