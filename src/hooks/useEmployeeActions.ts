import {
  addEmployee,
  updateEmployee,
  softDeleteEmployee,
  fetchEmployees,
  fetchDeletedEmployees,
} from '../store/actions/employeeActions';
import { Employee } from '../types/employee';
import { useAppDispatch } from './reduxHooks';

const useEmployeeActions = () => {
  const dispatch = useAppDispatch();

  const fetchNewEmployees = (page: number, limit: number) => {
    dispatch(fetchEmployees(page, limit));
  };

  const fetchNewDeletedEmployees = (page: number, limit: number) => {
    dispatch(fetchDeletedEmployees(page, limit));
  };

  const addNewEmployee = (employee: Employee) => {
    dispatch(addEmployee(employee));
  };

  const updateExistingEmployee = (employee: Employee) => {
    dispatch(updateEmployee(employee));
  };

  const deleteEmployee = (id: number) => {
    dispatch(softDeleteEmployee(id));
  };

  return {
    fetchNewEmployees,
    fetchNewDeletedEmployees,
    addNewEmployee,
    updateExistingEmployee,
    deleteEmployee,
  };
};

export default useEmployeeActions;
