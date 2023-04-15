import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PageWrapper from "../global/PageWrapper";
import { shades } from "../../theme";
import TopBar from "../global/TopBar";
import { ChevronLeft, Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PropertyNotesTable from "../../components/properties/PropertyNotesTable";
import AddPersonModal from "../../components/common/AddPersonModal";

const PropertyDetails = () => {
  const navigate = useNavigate();

  return (
    <>
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
              onClick={() => navigate(-2)}
              startIcon={<ChevronLeft />}
              variant="outlined"
            >
              Back
            </Button>
            <Typography ml={2} color={"#A1A5B6"} fontWeight={"500"}>
              Property Details
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Chip
              icon={<Download />}
              component={Button}
              variant="filled"
              sx={{
                bgcolor: "white",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              label="Download Agreement"
            />

            <Button startIcon={<EditNoteIcon />} variant="greenBtn">
              Edit Property
            </Button>
            <Button startIcon={<DeleteForeverIcon />} variant="warningBtn">
              Delete Property
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box m={2}>
        <Grid container gap={2} my={2} justifyContent={"space-between"}>
          <Grid item md={3.9}>
            <Paper elevation={0} sx={{ px: 5, py: 3 }}>
              <Box my={1}>
                <Typography variant="h6" fontWeight={"600"}>
                  About
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Property Name
                </Typography>
                <Typography variant="body2">Mukono Satellite Estate</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Land Type
                </Typography>
                <Typography variant="body2">Residential</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={7.9}>
            <Paper elevation={0} sx={{ px: 5, py: 3 }}>
              <Box my={1}>
                <Typography variant="h6" fontWeight={"600"}>
                  Location
                </Typography>
                <Grid container gap={5} justifyContent={"space-between"}>
                  <Grid item>
                    <Typography variant="caption" color="textSecondary">
                      Area Name
                    </Typography>
                    <Typography variant="body2">Mukono Kitonsa</Typography>
                    <Box mt={1}>
                      <Typography variant="caption" color="textSecondary">
                        District
                      </Typography>
                      <Typography variant="body2">Mukono</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption" color="textSecondary">
                      Map Latitude
                    </Typography>
                    <Typography variant="body2">0.2434544</Typography>
                    <Box mt={1}>
                      <Typography variant="caption" color="textSecondary">
                        Map Longitude
                      </Typography>
                      <Typography variant="body2">-31.0837378</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption" color="textSecondary">
                      Distance from main town/ Road
                    </Typography>
                    <Typography variant="body2">7.2Km</Typography>
                    <Box mt={1}>
                      <Typography variant="caption" color="textSecondary">
                        Nearby Landmark
                      </Typography>
                      <Typography variant="body2">
                        Mukono Parents Sec. Sch
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption" color="textSecondary">
                      Water
                    </Typography>
                    <Typography variant="body2">200m</Typography>
                    <Box mt={1}>
                      <Typography variant="caption" color="textSecondary">
                        UMEME
                      </Typography>
                      <Typography variant="body2">500m</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container gap={1} justifyContent={"space-between"}>
          <Grid item md={3.9}>
            <Paper elevation={0} sx={{ px: 5, py: 3 }}>
              <Box my={1}>
                <Typography variant="h6" fontWeight={"600"}>
                  Seller Details
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Full Name
                </Typography>
                <Typography variant="body2">Lubega Kato</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  NIN
                </Typography>
                <Typography variant="body2">CM8393873JD</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Address
                </Typography>
                <Typography variant="body2">Mukono Trading Center</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Phone Number
                </Typography>
                <Typography variant="body2">+256 772 1234 567</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3.9}>
            <Paper elevation={0} sx={{ px: 5, py: 3 }}>
              <Box my={1}>
                <Typography variant="h6" fontWeight={"600"}>
                  Purchaser Agent Details
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Full Name
                </Typography>
                <Typography variant="body2">Ssalongo Mukisa</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  NIN
                </Typography>
                <Typography variant="body2">CM8393873JD</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Address
                </Typography>
                <Typography variant="body2">Kibuli Kubiri</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Phone Number
                </Typography>
                <Typography variant="body2">+256 772 1234 567</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3.9}>
            <Paper elevation={0} sx={{ px: 5, py: 3 }}>
              <Box my={1}>
                <Typography variant="h6" fontWeight={"600"}>
                  Payment Details
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Payment Method
                </Typography>
                <Typography variant="body2">Cash - Full Amount</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Amount Paid
                </Typography>
                <Typography variant="body2">
                  UGX 300,000,000 Millions
                </Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Balance to be Paid
                </Typography>
                <Typography variant="body2">Nil</Typography>
              </Box>
              <Box my={1}>
                <Typography variant="caption" color="textSecondary">
                  Money Source
                </Typography>
                <Typography variant="body2">Centenary Bank Account</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Paper elevation={0} sx={{ px: 5, my: 3, py: 3 }}>
          <Typography variant="h6" fontWeight={"600"}>
            Remarks
          </Typography>
          <PropertyNotesTable />
        </Paper>
      </Box>
    </>
  );
};

export default PropertyDetails;
