import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropertyTabMenu from "../../components/properties/PropertyTabMenu";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { useNavigate } from "react-router-dom";
import PropertiesDataTable from "../../components/properties/PropertiesDataTable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PageWrapper from "../global/PageWrapper";
import { shades } from "../../theme";
import { BurstMode, ChevronLeft } from "@mui/icons-material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Properties = () => {
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
              onClick={() => navigate(-1)}
              startIcon={<ChevronLeft />}
              variant="outlined"
            >
              Back
            </Button>
            <Typography ml={2} color={"#A1A5B6"} fontWeight={"500"}>
              All Properties
            </Typography>
          </Box>
          {/* <Button
            onClick={() => navigate("/properties/add-property")}
            startIcon={<AddPhotoAlternateIcon />}
            variant="contained"
          >
            Add Property
          </Button> */}
        </Stack>
      </Box>
      <PageWrapper>
        <>
          <Stack direction={"row"} justifyContent={"space-between"} mb={2}>
            <TextField
              placeholder="Search"
              size="small"
              sx={{ width: "30%" }}
            />
            <Button
              onClick={() => navigate("/add-property")}
              startIcon={<AddHomeIcon />}
              variant="contained"
              size="small"
            >
              Add Property
            </Button>
          </Stack>
          <Stack mb={2} direction={"row"} justifyContent={"space-between"}>
            <PropertyTabMenu />

            <Button
              // onClick={() => navigate("/add-property")}
              startIcon={<FileDownloadIcon />}
            >
              Export
            </Button>
          </Stack>

          <PropertiesDataTable />
        </>
      </PageWrapper>
    </>
  );
};

export default Properties;
