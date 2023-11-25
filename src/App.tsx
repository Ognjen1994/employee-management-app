import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import EmployeesList from './routes/EmployeesList';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeesList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
