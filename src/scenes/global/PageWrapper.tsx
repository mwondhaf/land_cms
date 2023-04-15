import { Box } from "@mui/material";
import React from "react";

const PageWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <Box sx={{ borderRadius: 1, p: 4, bgcolor: "background.paper" }}>
      {children}
    </Box>
  );
};

export default PageWrapper;
