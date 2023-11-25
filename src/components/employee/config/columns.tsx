import { GridColDef } from '@mui/x-data-grid';

export const EMPLOYEE_COLUMNS: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
  {
    field: 'homeAddress.city',
    headerName: 'City',
    valueGetter: (params) => params.row?.homeAddress?.city,
    width: 150,
  },
  {
    field: 'homeAddress.ZIPCode',
    headerName: 'ZIP Code',
    valueGetter: (params) => params.row?.homeAddress?.ZIPCode,
    width: 150,
  },
  {
    field: 'homeAddress.addressLine1',
    headerName: 'Address Line 1',
    valueGetter: (params) => params.row?.homeAddress?.addressLine1,
    width: 200,
  },
  {
    field: 'homeAddress.addressLine2',
    headerName: 'Address Line 2',
    valueGetter: (params) => params.row?.homeAddress?.addressLine2,
    width: 200,
  },
  { field: 'dateOfEmployment', headerName: 'Date of Employment', width: 200 },
  { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
];
