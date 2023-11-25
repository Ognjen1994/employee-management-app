import React, { useEffect, useState } from 'react';
import EmployeeList from '../../components/employee/EmployeeList';
import EmployeeForm from '../../components/employee/EmployeeForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { EmployeeData } from '../../types/employee';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import './index.scss';
import Alert from '@mui/material/Alert';
import { SIZE, PAGE, INITIAL_PAGE, AUTO_HIDE_DURATION } from './constants';
import useEmployeeActions from '../../hooks/useEmployeeActions';

const EmployeesList = () => {
  const { fetchNewEmployees, fetchNewDeletedEmployees } = useEmployeeActions();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const error: string | null = useSelector((state: RootState) => state.employeeReducer.error);

  const employeesData: EmployeeData = useSelector(
    (state: RootState) => state.employeeReducer.employeesData,
  );

  const deletedEmployeesData = useSelector(
    (state: RootState) => state.employeeReducer.deletedEmployeesData,
  );

  useEffect(() => {
    fetchNewEmployees(PAGE, SIZE);
    fetchNewDeletedEmployees(PAGE, SIZE);
  }, []);

  useEffect(() => {
    if (error) setIsSnackbarOpen(true);
  }, [error]);

  const handleClose = () => setIsFormOpen(false);
  const handleSnackbarClose = () => setIsSnackbarOpen(false);
  const openCloseNewEmployeeForm = () => setIsFormOpen((prev) => !prev);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className="page-title">
        Employee Management System
      </h1>
      <Button variant="contained" onClick={openCloseNewEmployeeForm} className="add-employee">
        Add New Employee
      </Button>
      <div className="employee-lists">
        <div className="active-employee-list">
          {employeesData ? (
            <EmployeeList
              data={employeesData}
              loadData={fetchNewEmployees}
              page={INITIAL_PAGE}
              pageSize={SIZE}
              rowCount={employeesData?.count}
              deleted={false}
            />
          ) : null}
        </div>
        <div className="deleted-employee-list">
          {deletedEmployeesData ? (
            <EmployeeList
              data={deletedEmployeesData}
              loadData={fetchNewDeletedEmployees}
              page={INITIAL_PAGE}
              pageSize={SIZE}
              rowCount={deletedEmployeesData?.count}
              deleted={true}
            />
          ) : null}
        </div>
      </div>
      <EmployeeForm open={isFormOpen} onClose={handleClose} />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={AUTO_HIDE_DURATION}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default EmployeesList;
