import {
  FETCH_EMPLOYEES,
  FETCH_DELETED_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SOFT_DELETE_EMPLOYEE,
} from '../types/employeeActionsTypes';
import { Employee } from '../../types/employee';
import employeeApi from '../../api/employeeApi';
import { apiError } from './apiError';
import { Dispatch } from 'redux';

export const fetchEmployees = (page: number, limit: number) => async (dispatch: Dispatch) => {
  try {
    const employees = await employeeApi.fetchEmployees(page, limit);
    dispatch({ type: FETCH_EMPLOYEES, payload: employees });
  } catch (error) {
    dispatch(apiError('Failed to fetch employees'));
  }
};

export const fetchDeletedEmployees =
  (page: number, limit: number) => async (dispatch: Dispatch) => {
    try {
      const deletedEmployees = await employeeApi.fetchDeletedEmployees(page, limit);
      dispatch({ type: FETCH_DELETED_EMPLOYEES, payload: deletedEmployees });
    } catch (error) {
      dispatch(apiError('Failed to fetch deleted employees'));
    }
  };

export const addEmployee = (employee: Employee) => async (dispatch: Dispatch) => {
  try {
    const newEmployee = await employeeApi.addEmployee(employee);
    dispatch({ type: ADD_EMPLOYEE, payload: newEmployee });
  } catch (error) {
    dispatch(apiError('Failed to add employee'));
  }
};

export const updateEmployee = (employee: Employee) => async (dispatch: Dispatch) => {
  try {
    const updatedEmployee = await employeeApi.updateEmployee(employee);
    dispatch({ type: UPDATE_EMPLOYEE, payload: updatedEmployee });
  } catch (error) {
    dispatch(apiError('Failed to update employee'));
  }
};

export const softDeleteEmployee = (id: number) => async (dispatch: Dispatch) => {
  try {
    await employeeApi.softDeleteEmployee(id);
    dispatch({ type: SOFT_DELETE_EMPLOYEE, payload: id });
  } catch (error) {
    dispatch(apiError('Failed to soft delete employee'));
  }
};
