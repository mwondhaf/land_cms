import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Button, Chip, TextField, Typography } from "@mui/material";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const columns: GridColDef[] = [
  //   { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    width: 150,

    headerName: "Date",
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Typography variant="body2">
        {moment().format("DD, MMM, YYYY")}
      </Typography>
    ),
  },
  {
    field: "lastName",
    headerName: "Added By",
    width: 150,
    editable: false,
  },
  {
    field: "details",
    headerName: "Details",
    sortable: false,
    width: 500,
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        // <Link to={`${params.row.id}`}>
        <Button
          //   startIcon={<RemoveRedEyeOutlined />}
          size="small"
          // onClick={(e) => console.log(params.row.id)}
          //   variant="contained"
        >
          Delete
        </Button>
        // </Link>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "Kajubi Henry",
    details:
      "Land checking done and found too much bush, needs to be cleared well",
  },
  {
    id: 2,
    lastName: "Mugoya Lannister",
    details:
      "Piped water installed near the land, brought by the neighbors and now its 200 meters away",
  },
];

export default function PropertyNotesTable() {
  return (
    <Box sx={{ height: "300px", width: "100%", mt: 3 }}>
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
