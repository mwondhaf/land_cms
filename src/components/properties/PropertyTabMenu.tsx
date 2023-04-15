import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function PropertyTabMenu() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottomWidth: 1, borderColor: "red" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="All " wrapped />
        <Tab value="two" label="Residential" />
        <Tab value="three" label="Commercial" />
        <Tab value="apartments" label="Farm Land" />
      </Tabs>
    </Box>
  );
}
