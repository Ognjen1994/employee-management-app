import {
  FETCH_EMPLOYEES,
  FETCH_DELETED_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SOFT_DELETE_EMPLOYEE,
} from '../types/employeeActionsTypes';
import { API_ERROR } from '../types/apiErrorTypes';
import { Employee, EmployeeData } from '../../types/employee';
import { EmployeeAction } from '../actions/types/employeeActionsTypes';

interface EmployeeState {
  employeesData: EmployeeData;
  deletedEmployeesData: EmployeeData;
  error: string | null;
}

const initialState: EmployeeState = {
  employeesData: { count: 0, employees: [] },
  deletedEmployeesData: { count: 0, employees: [] },
  error: null,
};

const employeeReducer = (state = initialState, action: EmployeeAction): EmployeeState => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employeesData: action.payload as EmployeeData,
        error: null,
      };
    case FETCH_DELETED_EMPLOYEES:
      return {
        ...state,
        deletedEmployeesData: action.payload as EmployeeData,
        error: null,
      };
    case ADD_EMPLOYEE:
      const newEmployees = [...state.employeesData.employees, action.payload];
      return {
        ...state,
        employeesData: {
          employees: newEmployees as Employee[],
          count: state.employeesData.count + 1,
        },
        error: null,
      };
    case UPDATE_EMPLOYEE:
      const updatedEmployees = state.employeesData.employees.map((employee: Employee) => {
        return employee._id === (action.payload as Employee)._id ? action.payload : employee;
      });

      return {
        ...state,
        employeesData: {
          employees: updatedEmployees as Employee[],
          count: state.employeesData.count,
        },
        error: null,
      };
    case SOFT_DELETE_EMPLOYEE:
      const filteredEmployees = state.employeesData.employees.filter(
        (employee: Employee) => employee._id !== action.payload,
      );

      const deletedEmployee =
        state.employeesData.employees.find(
          (employee: Employee) => employee._id === action.payload,
        ) || [];

      const updatedDeletedEmployees = [
        ...state.deletedEmployeesData.employees,
        deletedEmployee,
      ] as Employee[];
      return {
        ...state,
        employeesData: { employees: filteredEmployees, count: state.employeesData.count - 1 },
        deletedEmployeesData: {
          employees: updatedDeletedEmployees,
          count: state.deletedEmployeesData.count + 1,
        },
        error: null,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
