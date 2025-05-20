"use client";

import { DataGrid as MuiDataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export interface IDataGridProps {
  rows: GridRowsProp,
  columns: GridColDef[],
  loading?: boolean,
}

export const DataGrid = ({ rows, columns }: IDataGridProps) => {  

  return (
    <MuiDataGrid
      rows={rows}
      columns={columns}
      // loading={loading}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
  );
}