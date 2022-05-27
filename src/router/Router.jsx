import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee';
import CurrentEmployees from '../pages/CurrentEmployees';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CreateEmployee />} />
        <Route path="/current-employee" element={<CurrentEmployees />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
