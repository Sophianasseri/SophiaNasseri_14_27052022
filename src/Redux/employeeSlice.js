import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    saveEmployee: (state, action) => {
      const employees = [...state.employees];
      employees.push(action.payload);
      state.employees = [...employees];
    },
  },
});

export const { saveEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
