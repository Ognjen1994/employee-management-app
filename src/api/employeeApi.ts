import axios from 'axios';
import { Employee } from '../types/employee';

const BASE_URL = 'http://142.132.229.249:3000';

const employeeApi = {
  fetchEmployees: async (page: number, limit: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/employees?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch employees');
    }
  },

  fetchDeletedEmployees: async (page: number, limit: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/employees/deleted?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch deleted employees');
    }
  },

  addEmployee: async (employee: Employee) => {
    try {
      const response = await axios.post(`${BASE_URL}/employees`, employee);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add employee');
    }
  },

  updateEmployee: async (employee: Employee) => {
    try {
      const response = await axios.patch(`${BASE_URL}/employees/${employee._id}`, employee);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update employee');
    }
  },

  softDeleteEmployee: async (id: number) => {
    try {
      await axios.delete(`${BASE_URL}/employees/soft-delete/${id}`);
    } catch (error) {
      throw new Error('Failed to soft delete employee');
    }
  },
};

export default employeeApi;
