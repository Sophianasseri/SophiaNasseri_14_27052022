const EntriesCount = ({
  pageIndex,
  pageSize,
  rows,
  page,
  globalFilter,
  preGlobalFilteredRows,
}) => {
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
export default EntriesCount;
