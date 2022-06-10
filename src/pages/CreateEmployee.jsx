import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../hooks/useModal';

import { states, department } from '../Data/data';

import { Modal } from 'sn-react-modal-component';
import DateInput from '../components/DateInput/DateInput';
import Select from 'react-select';

//Format states data so we can use it in select component
const stateOptions = states.map((state) => ({
  value: state.abbreviation,
  label: state.name,
}));

const CreateEmployee = () => {
  const { isOpen, toggle } = useModal();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [usState, setUsState] = useState();
  const [zipCode, setZipCode] = useState();
  const [dpt, setDpt] = useState();

  useEffect(() => {
    localStorage.setItem('firstName', JSON.stringify(firstName));
  }, [firstName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state: usState,
      zipCode,
      department: dpt,
    };
    // si props employees est vide alors on check le localstorage
    const employees = localStorage.getItem('employees')
      ? JSON.parse(localStorage.getItem('employees'))
      : [];
    employees.push(newEmployee);

    localStorage.setItem('employees', JSON.stringify(employees));

    toggle();
  };
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current-employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <DateInput
            name="date-of-birth"
            content="Date of Birth"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <DateInput
            name="start-date"
            content="Start Date"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <Select
              options={stateOptions}
              defaultValue={{ value: 'AL', label: 'Alabama' }}
              onChange={(e) => setUsState(e.target.value)}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            options={department}
            defaultValue={{ value: 'sales', label: 'Sales' }}
            onChange={(e) => setDpt(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </button>
        </form>

        <Modal isOpen={isOpen} hide={toggle}>
          <p>Employee Created!</p>
        </Modal>
      </div>
    </>
  );
};

export default CreateEmployee;
