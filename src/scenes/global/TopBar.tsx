import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { shades } from "../../theme";

const TopBar = ({
  open,
  setOpen,
  children,
}: {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element;
}) => {
  return (
    <AppBar elevation={0}>
      <Toolbar sx={{ bgcolor: shades.tone.darkBlue }} disableGutters>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            ml: open ? "280px" : "80px",
            width: "100%",
            alignItems: "center",
            pr: 2.5,
          }}
        >
          <Typography variant="h6">MONTREAL HOLDINGS</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton>
              <Avatar src="https://images.pexels.com/photos/7562187/pexels-photo-7562187.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </IconButton>
            <Box>
              <Typography
                variant="body2"
                textAlign={"start"}
                fontWeight={"bold"}
              >
                Francis. M
              </Typography>
              <Typography textAlign={"right"} variant="caption">
                Manager
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
