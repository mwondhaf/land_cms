import React from "react";
import PageWrapper from "../global/PageWrapper";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { shades } from "../../theme";
import PropertyNotesTable from "../../components/properties/PropertyNotesTable";
import CustomerRemarksTable from "../../components/customers/CustomerRemarksTable";
import { ChevronLeft, Edit } from "@mui/icons-material";
import { GridDeleteForeverIcon } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const CustomerDetails = () => {
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
              Person Details
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button variant="greenBtn" startIcon={<Edit />}>
              Edit
            </Button>
            <Button startIcon={<GridDeleteForeverIcon />} variant="warningBtn">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
      <PageWrapper>
        <>
          <Paper elevation={0} sx={{ px: 5, py: 3 }}>
            <Typography variant="h6" fontWeight={"600"}>
              Profile
            </Typography>
            <Grid container mt={2}>
              <Grid item md={3}>
                <Typography variant="body2" color="textSecondary">
                  Full Name
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  fontWeight={"600"}
                  color={shades.primary.dark}
                >
                  Makubuya John
                </Typography>
              </Grid>
            </Grid>

            <Grid container my={2}>
              <Grid item md={3}>
                <Typography variant="body2" color="textSecondary">
                  Phone Number
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  fontWeight={"600"}
                  color={shades.primary.dark}
                >
                  +256 772 1234 567
                </Typography>
              </Grid>
            </Grid>
            <Grid container my={2}>
              <Grid item md={3}>
                <Typography variant="body2" color="textSecondary">
                  NIN
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  fontWeight={"600"}
                  color={shades.primary.dark}
                >
                  CM2338477767
                </Typography>
              </Grid>
            </Grid>
            <Grid container my={2}>
              <Grid item md={3}>
                <Typography variant="body2" color="textSecondary">
                  Email
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  fontWeight={"600"}
                  color={shades.primary.dark}
                >
                  test@mail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid container my={2}>
              <Grid item md={3}>
                <Typography variant="body2" color="textSecondary">
                  Address
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  fontWeight={"600"}
                  color={shades.primary.dark}
                >
                  Nakawa Town, Kampala
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={0} sx={{ px: 5, my: 3, py: 3 }}>
            <Typography variant="h6" fontWeight={"600"}>
              Activity History
            </Typography>
            <CustomerRemarksTable />
          </Paper>
        </>
      </PageWrapper>
    </div>
  );
};

export default CustomerDetails;
