import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';
import { saveEmployee } from '../../Redux/employeeSlice';

import { states, department } from '../../Data/data';

import { Modal } from 'sn-react-modal-component';
import DateInput from './DateInput/DateInput';
import Select from 'react-select';
import { selectCustomTheme } from '../../utils/selectCustomTheme';

//Format states data so we can use it in select component
const stateOptions = states.map((state) => ({
  value: state.abbreviation,
  label: state.name,
}));

const EmployeeForm = () => {
  const { isOpen, toggle } = useModal();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [usState, setUsState] = useState('AL');
  const [zipCode, setZipCode] = useState();
  const [dpt, setDpt] = useState('sales');

  const dispatch = useDispatch();

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
    dispatch(saveEmployee(newEmployee));
    toggle();
  };
  return (
    <>
      <form id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          className="form-input"
          type="text"
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          className="form-input"
          type="text"
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <DateInput
          className="form-input"
          name="date-of-birth"
          content="Date of Birth"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <DateInput
          className="form-input"
          name="start-date"
          content="Start Date"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            className="form-input"
            id="street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            className="form-input"
            id="city"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="state">State</label>
          <Select
            options={stateOptions}
            defaultValue={stateOptions[0]}
            onChange={(e) => setUsState(e.value)}
            theme={selectCustomTheme}
          />
          <label htmlFor="zip-code">Zip Code</label>
          <input
            className="form-input"
            id="zip-code"
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Select
          options={department}
          defaultValue={department[0]}
          onChange={(e) => setDpt(e.value)}
          theme={selectCustomTheme}
          menuPlacement={'top'}
        />
        <button
          disabled={
            !firstName ||
            !lastName ||
            !dateOfBirth ||
            !startDate ||
            !city ||
            !street ||
            !zipCode
          }
          className="submit-btn btn"
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
    </>
  );
};

export default EmployeeForm;
