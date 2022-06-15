import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    saveEmployee: (state, action) => action.payload,
  },
});

export const { saveEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
