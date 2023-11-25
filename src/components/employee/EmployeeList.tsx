import React, { useEffect, useState } from 'react';
import { Employee, EmployeeData } from '../../types/employee';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmployeeForm from './EmployeeForm';
import { EMPLOYEE_COLUMNS } from './config/columns';
import { EMPLOYEE_LIST_TITLE } from './config/constants';
import useEmployeeActions from '../../hooks/useEmployeeActions';

interface EmployeeListProps {
  data: EmployeeData;
  loadData: (page: number, limit: number) => void;
  page: number;
  pageSize: number;
  rowCount: number;
  deleted: boolean;
}

interface PaginationModel {
  page: number;
  pageSize: number;
}

const EmployeeList = ({ data, loadData, page, pageSize, rowCount, deleted }: EmployeeListProps) => {
  const { deleteEmployee } = useEmployeeActions();
  const [paginationModel, setPaginationModel] = useState({
    page,
    pageSize,
  });
  const [columns, setColumns] = useState([...EMPLOYEE_COLUMNS]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (!deleted) {
      setColumns([
        ...EMPLOYEE_COLUMNS,
        {
          field: 'delete',
          headerName: 'Delete',
          width: 100,
          renderCell: (params) => deleteButton(params.id as number),
        },
        {
          field: 'edit',
          headerName: 'Edit',
          width: 100,
          renderCell: (params) => editButton(params.row as Employee),
        },
      ]);
    }
  }, []);

  const handleClose = () => setSelectedEmployee(null);
  const handleEdit = (employee: Employee) => setSelectedEmployee(employee);

  const handlePagination = (paginationModel: PaginationModel) => {
    loadData(paginationModel.page + 1, paginationModel.pageSize);
    setPaginationModel(paginationModel);
  };

  const deleteButton = (id: number) => (
    <IconButton onClick={() => deleteEmployee(id)} aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );

  const editButton = (employee: Employee) => (
    <IconButton onClick={() => handleEdit(employee)} aria-label="edit">
      <EditIcon />
    </IconButton>
  );

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {deleted ? EMPLOYEE_LIST_TITLE.DELETED : EMPLOYEE_LIST_TITLE.ACTIVE}
          </Typography>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          {data?.employees ? (
            <DataGrid
              rows={data?.employees || []}
              getRowId={(row) => row._id}
              columns={columns}
              disableRowSelectionOnClick
              paginationMode="server"
              paginationModel={paginationModel}
              onPaginationModelChange={handlePagination}
              rowCount={rowCount}
              pageSizeOptions={[pageSize]}
              pagination
            />
          ) : null}
        </Grid>
      </Grid>
      {selectedEmployee && (
        <EmployeeForm open={true} onClose={handleClose} initialEmployee={selectedEmployee} />
      )}
    </>
  );
};

export default EmployeeList;
