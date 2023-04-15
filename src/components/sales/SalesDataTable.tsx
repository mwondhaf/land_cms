import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Button,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { customers } from "../../data/customers";
import { DeleteForever, Edit, Print, Settings } from "@mui/icons-material";
import { sold_land } from "../../data/sold_land";

const columns: GridColDef[] = [
  { field: "id", headerName: "Invoice No.", width: 100 },
  {
    field: "date",
    headerName: "Date",
    width: 100,
    editable: false,
  },
  {
    field: "location",
    headerName: "Land Location",
    width: 150,
    editable: false,
  },
  {
    field: "type",
    headerName: "Size",
    sortable: false,
    width: 100,
  },
  {
    field: "buyer",
    headerName: "Buyer",
    width: 150,
  },
  {
    field: "status",
    headerName: "Payment Status",
    width: 150,
    editable: false,
  },
  {
    field: "actions",
    width: 180,
    headerName: "Actions",
    renderCell: (params) => {
      return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          {/* <Link to={`/customers/${params.row.id}`}> */}
          <Button variant="contained" size="small">
            View
          </Button>
          {/* </Link> */}
          {/* <Link to={`/customers/${params.row.id}`}> */}
          <Button startIcon={<Print />} variant="outlined" size="small">
            Print
          </Button>
          {/* </Link> */}
        </Stack>
      );
    },
  },
];

export default function SalesDataTable() {
  return (
    <Box sx={{ height: "calc(80vh - 11rem)", width: "100%" }}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={2}
        direction={"row"}
      >
        <TextField size="small" placeholder="Search" />
        <Button variant="outlined" startIcon={<Settings />}>
          Generate Sales Report
        </Button>
      </Stack>
      <DataGrid
        rows={sold_land}
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
