import { Link } from 'react-router-dom';
import Table from '../components/Table/Table';

const CurrentEmployees = () => {
  return (
    <div className="table-container">
      <h1 className="table-title">Current Employees</h1>
      <Table />
      <Link className="home-link" to="/">
        Home
      </Link>
    </div>
  );
};

export default CurrentEmployees;
