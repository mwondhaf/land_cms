// @ts-nocheck
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageWrapper from "../global/PageWrapper";
import { shades } from "../../theme";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import {
  Camera,
  ChevronLeft,
  DocumentScannerTwoTone,
} from "@mui/icons-material";
import { people } from "../../data/people";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import AddPersonModal from "../../components/common/AddPersonModal";

type Inputs = {
  name: string;
  type: string;
  nameRequired: string;
};

export default function AddProperty() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const navigate = useNavigate();
  console.log(watch("name")); // watch input value by passing the name of it

  const [age, setAge] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
              onClick={() => navigate(-1)}
              startIcon={<ChevronLeft />}
              variant="outlined"
            >
              Cancel
            </Button>
            <Typography ml={2} color={"#A1A5B6"} fontWeight={"500"}>
              Add New Property
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={2}>
            <Button startIcon={<BurstModeIcon />} variant="contained">
              View All Properties
            </Button>
          </Stack>
        </Stack>
      </Box>
      <PageWrapper>
        <Container disableGutters sx={{ py: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} mb={3}>
              <Box>
                <Typography fontWeight={"700"} color={"textSecondary"}>
                  About Property
                </Typography>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Property Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <FormControl fullWidth>
                      <select
                        {...register("type", { required: true })}
                        name="Types"
                        style={{
                          height: 55,
                          borderRadius: 3,
                          paddingLeft: 10,
                          paddingRight: 10,
                          borderColor: errors && errors.type ? "red" : "",
                        }}
                      >
                        <option value="">--Select Land Type--</option>
                        <option value="land">Residential</option>
                        <option value="house">Commercial</option>
                        <option value="apartment">Farm Land</option>
                      </select>
                    </FormControl>
                  </Grid>
                  <Grid item md={5.8}>
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id="combo-box-demo"
                      options={["Mailo Land", "Titled Land"]}
                      renderInput={(params) => (
                        <TextField {...params} label="Land Category" />
                      )}
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <FormControl fullWidth>
                      <select
                        {...register("type", { required: true })}
                        name="Types"
                        style={{
                          height: 55,
                          borderRadius: 3,
                          paddingLeft: 10,
                          paddingRight: 10,
                          borderColor: errors && errors.type ? "red" : "",
                        }}
                      >
                        <option value="">--Select Land Terrain--</option>
                        <option value="land">Hill</option>
                        <option value="house">Slop</option>
                        <option value="apartment">Flat</option>
                        <option value="apartment">Swamp</option>
                      </select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography fontWeight={"700"} color={"textSecondary"}>
                  Location
                </Typography>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Area - Village/ Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <FormControl fullWidth>
                      <select
                        {...register("type", { required: true })}
                        name="Types"
                        style={{
                          height: 55,
                          borderRadius: 3,
                          paddingLeft: 10,
                          paddingRight: 10,
                          borderColor: errors && errors.type ? "red" : "",
                        }}
                      >
                        <option value="">--Select District--</option>
                        <option value="land">Kampala</option>
                        <option value="house">Mukono</option>
                        <option value="apartment">Buikwe</option>
                      </select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Latitude"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <TextField
                      label="Longitude"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Distance from main Town/ Road"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <TextField
                      label="Nearby Landmark"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Water Availability"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <TextField
                      label="Electricity Availability"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography fontWeight={"700"} color={"textSecondary"}>
                  Acquisition Details
                </Typography>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent={"space-between"}
                    >
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={people.map(
                          (person) => `${person.firstName} ${person.lastName}`
                        )}
                        sx={{ width: "70%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Seller Name" />
                        )}
                      />
                      <Button onClick={() => setOpen(!open)} variant="outlined">
                        Add Person
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item md={5.8}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={people.map(
                        (person) => `${person.firstName} ${person.lastName}`
                      )}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Company Representative" />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <DatePicker
                      disableFuture
                      label="Date Bought"
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={[
                        "Free",
                        "Full Payment",
                        "Installment",
                        "Not Paid",
                      ]}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Purchase/ Payment Mode" />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
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
                  <Grid item md={5.8}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={[
                        "MTN Mobile Money Account",
                        "Centenary Bank Account",
                        "DFC Bank Account",
                        "Other source",
                      ]}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Money Source" />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent={"space-between"} my={2} gap={2}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Amount Paid"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <TextField
                      label="Balance to be paid"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography fontWeight={"700"} color={"textSecondary"}>
                  Witnesses
                </Typography>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={3}>
                    <TextField
                      maxRows={10}
                      label="NIN"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Address"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={3}>
                    <TextField
                      maxRows={10}
                      label="NIN"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Address"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={3}>
                    <TextField
                      maxRows={10}
                      label="NIN"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Address"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>{" "}
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={3}>
                    <TextField
                      maxRows={10}
                      label="NIN"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Address"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>{" "}
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Full Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={3}>
                    <TextField
                      maxRows={10}
                      label="NIN"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      maxRows={10}
                      label="Address"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography fontWeight={"700"} color={"textSecondary"}>
                  Documents
                </Typography>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Reference Number"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                  <Grid item md={5.8}>
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
                </Grid>
                {/* <Grid container justifyContent={"space-between"} my={2} gap={2}>
                  <Grid item md={5.8}>
                    <TextField
                      label="Amount Paid"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                     
                      
                    />
                  </Grid>
                  <Grid item md={5.8}>
                    <TextField
                      label="Balance to be paid"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                     
                      
                    />
                  </Grid>
                </Grid> */}
                <Grid container justifyContent={"space-between"} my={2} gap={2}>
                  <Grid item md={5.8}>
                    <Button
                      startIcon={<DocumentScannerTwoTone />}
                      variant="contained"
                      size="large"
                      component="label"
                    >
                      Upload Documents
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Grid>
                  <Grid item md={5.8}>
                    {/* <TextField
                      label="Balance to be paid"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                     
                      
                    /> */}
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Typography fontWeight={"700"} color={"textSecondary"}>
                  Remarks
                </Typography>
                <Grid my={2} container gap={2} justifyContent={"space-between"}>
                  <Grid item md={12}>
                    <TextField
                      maxRows={10}
                      // label="Reference Number"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      defaultValue="test"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Stack>

            {/* include validation with required or other standard HTML validation rules */}

            {/* errors will return when field validation fails  */}
            {/* {errors.nameRequired && <span>This field is required</span>} */}

            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Add Property
            </Button>
          </form>
        </Container>
      </PageWrapper>
      <Box>
        <AddPersonModal {...{ open, setOpen, title: "Add Person" }} />
      </Box>
    </>
  );
}
