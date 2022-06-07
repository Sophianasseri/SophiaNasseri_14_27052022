import { useState } from 'react';
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
  const [selectedOption, setSelectedOption] = useState();
  const { isOpen, toggle } = useModal();

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current-employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <DateInput name="date-of-birth" content="Date of Birth" />
          <DateInput name="start-date" content="Start Date" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={stateOptions}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select options={department} />
        </form>

        <button onClick={toggle}>Save</button>
        <Modal isOpen={isOpen} hide={toggle}>
          <p>Employee Created!</p>
        </Modal>
      </div>
    </>
  );
};

export default CreateEmployee;
