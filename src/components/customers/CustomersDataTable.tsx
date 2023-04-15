import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Chip, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { customers } from "../../data/customers";
import { DeleteForever, Edit } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "location",
    headerName: "Address",
    width: 150,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.first_name} ${params.row.last_name}`,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Link to={`/customers/${params.row.id}`}>
            <Button variant="contained" size="small">
              View
            </Button>
          </Link>
          {/* <Link to={`${params.row.id}`}> */}
          <IconButton color="primary">
            <Edit />
          </IconButton>
          {/* </Link> */}
          {/* <Link to={`${params.row.id}`}> */}
          <IconButton sx={{ color: (theme) => theme.palette.error.light }}>
            <DeleteForever />
          </IconButton>
          {/* </Link> */}
        </Stack>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "Mukono Satellite",
    type: "Residential",
    status: "Available",
  },
  { id: 2, lastName: "Naalya", type: "Residential", status: "Sold" },
  { id: 3, lastName: "Kiwatule", type: "Commercial", status: "Partially Paid" },
  { id: 4, lastName: "Nakawa", type: "Commercial", status: "Available" },
  { id: 5, lastName: "Targaryen", type: "Farm Land", status: "Issues" },
  { id: 6, lastName: "Melisandre", type: null, status: "Available" },
  { id: 7, lastName: "Clifford", type: "Ferrara", status: "Available" },
  { id: 8, lastName: "Frances", type: "Rossini", status: "Sold" },
  { id: 9, lastName: "Roxie", type: "Harvey", status: "Available" },
  { id: 10, lastName: "Roxie", type: "Harvey", status: "Issues" },
  { id: 11, lastName: "Roxie", type: "Harvey", status: "Available" },
];

export default function CustomersDataTable() {
  return (
    <Box sx={{ height: "75vh", width: "100%" }}>
      <DataGrid
        rows={customers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
