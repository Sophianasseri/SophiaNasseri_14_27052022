import { Link } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';

const CreateEmployee = () => {
  return (
    <div className="page-container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Link to="/current-employee">View Current Employees</Link>
      <h2 className="form-title">Create Employee</h2>
      <EmployeeForm />
    </div>
  );
};

export default CreateEmployee;
