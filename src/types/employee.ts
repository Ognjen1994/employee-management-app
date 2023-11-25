export interface HomeAddress {
  city: string;
  ZIPCode: string;
  addressLine1: string;
  addressLine2: string;
}

export interface Employee {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  homeAddress: HomeAddress;
  dateOfEmployment: string;
  dateOfBirth: string;
}

export interface EmployeeData {
  employees: Employee[];
  count: number;
}
