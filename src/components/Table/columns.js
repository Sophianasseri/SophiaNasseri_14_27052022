import { formatISO, format } from 'date-fns';
export const COLUMNS = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Start Date',
    accessor: (row) => formatISO(new Date(row.startDate)),
    Cell: ({ value }) => {
      return format(new Date(value), 'MM/dd/yyyy');
    },
  },
  {
    Header: 'Department',
    accessor: 'department',
  },
  {
    Header: 'Date of Birth',
    accessor: (row) => formatISO(new Date(row.dateOfBirth)),
    Cell: ({ value }) => {
      return format(new Date(value), 'MM/dd/yyyy');
    },
  },
  {
    Header: 'Street',
    accessor: 'street',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Zip Code',
    accessor: 'zipCode',
  },
];
