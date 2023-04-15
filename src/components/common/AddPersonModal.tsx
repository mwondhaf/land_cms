import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Autocomplete, Paper, Stack, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddPersonModal({
  open,
  setOpen,
  title,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Stack direction={"row"} spacing={2} mt={2}>
            <TextField label="First Name" fullWidth />
            <TextField label="Last Name" fullWidth />
          </Stack>
          <Stack direction={"row"} spacing={2} mt={2}>
            <TextField label="Address" fullWidth />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["Jinja", "Kampala", "Mbale", "Mukono"]}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="District" />
              )}
            />
          </Stack>
          <Stack direction={"row"} spacing={2} mt={2}>
            <TextField label="Phone Number" fullWidth />
            <TextField label="Email" fullWidth />
          </Stack>
          <Button
            onClick={() => setOpen(!open)}
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
          >
            {title}
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            size="large"
            fullWidth
            sx={{ mt: 1 }}
          >
            Cancel
          </Button>
        </Paper>
      </Modal>
    </div>
  );
}
