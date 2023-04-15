import React, { useState } from "react";
import PageWrapper from "../global/PageWrapper";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import AddPersonModal from "../../components/common/AddPersonModal";
import { DocumentScannerTwoTone } from "@mui/icons-material";

const AddNewSale = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <PageWrapper>
        <>
          <Typography pb={2} fontWeight={"700"} color={"textSecondary"}>
            Sale Details
          </Typography>
          <Grid container gap={2} alignItems={"center"}>
            <Grid item md={4}>
              <Box my={1}>
                <DatePicker
                  disableFuture
                  label="Sale Date"
                  sx={{ width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"space-between"}
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Sarah Kizito"]}
                  sx={{ width: "70%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Customer Name" />
                  )}
                />
                <Button onClick={() => setOpen(!open)} variant="outlined">
                  New Customer
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container gap={2} alignItems={"center"}>
            <Grid item md={6}>
              <Box my={1}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    "#45687 - 50*100ft Plot - Mukono",
                    "#55488 - 100*100ft Plot - Kyetume",
                  ]}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Land Being Sold" />
                  )}
                />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={["Farouq Mutenzi", "Peter Odoi"]}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Agent Name" />
                )}
              />
            </Grid>
          </Grid>

          <Box my={2}>
            <Typography pb={2} fontWeight={"700"} color={"textSecondary"}>
              Payment
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Free", "Full Payment", "Installment", "Not Paid"]}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Purchase/ Payment Mode" />
                  )}
                />
              </Grid>
              <Grid item md={3}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Cash", "Bank", "Mobile Money", "Other"]}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Payment means" />
                  )}
                />
              </Grid>
              <Grid item md={4.2}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    "Pending Payment",
                    "Processing",
                    "Complete",
                    "Refunded",
                    "Other",
                  ]}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Payment Status" />
                  )}
                />
              </Grid>
            </Grid>
          </Box>
          <Grid container my={3} gap={2}>
            <Grid item md={4}>
              <TextField
                label="Amount Paid"
                variant="outlined"
                sx={{ width: "100%" }}
                defaultValue="test"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                label="Balance to be paid"
                variant="outlined"
                sx={{ width: "100%" }}
                defaultValue="test"
              />
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography fontWeight={"700"} color={"textSecondary"}>
              Documents Issued
            </Typography>
            <Grid my={2} container gap={2} alignItems={"center"}>
              <Grid item md={4}>
                <TextField
                  label="Reference Number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  defaultValue="test"
                />
              </Grid>
              <Grid item md={4}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Title", "Agreement"]}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Document Type" />
                  )}
                />
              </Grid>
              <Grid item md={2}>
                <Button
                  startIcon={<DocumentScannerTwoTone />}
                  variant="contained"
                  size="large"
                  component="label"
                >
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained" size="large">
            Create Sale
          </Button>
        </>
      </PageWrapper>
      <AddPersonModal {...{ title: "Add Customer", open, setOpen }} />
    </div>
  );
};

export default AddNewSale;
