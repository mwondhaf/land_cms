import React from "react";
import PageWrapper from "../global/PageWrapper";
import { Box, Button, Stack, Typography } from "@mui/material";
import SalesDataTable from "../../components/sales/SalesDataTable";
import { ChevronLeft, Receipt } from "@mui/icons-material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const AllSales = () => {
  const navigate = useNavigate();
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
              All Sales
            </Typography>
          </Box>
          <Button
            onClick={() => navigate("/sales/new-sale")}
            startIcon={<Receipt />}
            variant="contained"
          >
            New Sale
          </Button>
        </Stack>
      </Box>
      <PageWrapper>
        <SalesDataTable />
      </PageWrapper>
    </div>
  );
};

export default AllSales;
