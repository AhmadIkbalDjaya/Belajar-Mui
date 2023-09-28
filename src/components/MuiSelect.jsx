import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  console.log(country);
  console.log(countries);
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeCountries = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChangeCountry}
          fullWidth
        >
          <MenuItem value="ID">Indonesia</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={countries}
          onChange={handleChangeCountries}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Please check your country"
          error
        >
          <MenuItem value="ID">Indonesia</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
    </>
  );
};
