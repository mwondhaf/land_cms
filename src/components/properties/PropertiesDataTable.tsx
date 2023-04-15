import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Location",
    width: 150,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Land Size",
    sortable: false,
    width: 100,
    valueGetter: (params: GridValueGetterParams) => "50 * 100ft",
  },
  {
    field: "docRef",
    headerName: "Reference Number",
    width: 120,
    valueGetter: (params: GridValueGetterParams) => `#84890459`,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    editable: false,
    renderCell: (params) => {
      return (
        <Chip
          color={
            params.row.status === "Available"
              ? "info"
              : params.row.status === "Sold"
              ? "success"
              : params.row.status === "Partially Paid"
              ? "warning"
              : params.row.status === "Issues"
              ? "error"
              : "default"
          }
          size="small"
          label={params.row.status}
        />
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <Link to={`${params.row.id}`}>
          <Button
            //   startIcon={<RemoveRedEyeOutlined />}
            size="small"
            // onClick={(e) => console.log(params.row.id)}
            //   variant="contained"
          >
            Details
          </Button>
        </Link>
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

export default function PropertiesDataTable() {
  return (
    <Box
      sx={{ height: "calc(80vh - 11rem)", overflowX: "scroll", width: "100%" }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
