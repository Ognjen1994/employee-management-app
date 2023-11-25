import { Employee, EmployeeData } from '../../../types/employee';
import {
  FETCH_EMPLOYEES,
  FETCH_DELETED_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SOFT_DELETE_EMPLOYEE,
} from '../../types/employeeActionsTypes';
import { apiError } from '../apiError';

export interface FetchEmployeesAction {
  type: typeof FETCH_EMPLOYEES;
  payload: EmployeeData;
}

export interface FetchDeletedEmployeesAction {
  type: typeof FETCH_DELETED_EMPLOYEES;
  payload: EmployeeData;
}

export interface AddEmployeeAction {
  type: typeof ADD_EMPLOYEE;
  payload: Employee;
}

export interface UpdateEmployeeAction {
  type: typeof UPDATE_EMPLOYEE;
  payload: Employee;
}

export interface SoftDeleteEmployeeAction {
  type: typeof SOFT_DELETE_EMPLOYEE;
  payload: number;
}

export type EmployeeAction =
  | FetchEmployeesAction
  | FetchDeletedEmployeesAction
  | AddEmployeeAction
  | UpdateEmployeeAction
  | SoftDeleteEmployeeAction
  | ReturnType<typeof apiError>;
