import React, { useState } from "react";
import CustomersDataTable from "../../components/customers/CustomersDataTable";
import PageWrapper from "../global/PageWrapper";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ChevronLeft, PersonAdd } from "@mui/icons-material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import AddPersonModal from "../../components/common/AddPersonModal";

const AllCustomers = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Box
        sx={{
          backgroundColor: shades.tone.darkBlue,
        }}
        px={2}
        pb={2}
        pt={0.5}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Button
              onClick={() => navigate(-1)}
              startIcon={<ChevronLeft />}
              variant="outlined"
            >
              Back
            </Button>
            <Typography ml={2} color={"#A1A5B6"} fontWeight={"500"}>
              All Customers
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={2}>
            <Button
              onClick={() => setOpen(!open)}
              startIcon={<PersonAdd />}
              variant="contained"
            >
              Add Customer
            </Button>
          </Stack>
        </Stack>
      </Box>
      <PageWrapper>
        <CustomersDataTable />
      </PageWrapper>
      <AddPersonModal {...{ open, setOpen, title: "Add Customer" }} />
    </div>
  );
};

export default AllCustomers;
