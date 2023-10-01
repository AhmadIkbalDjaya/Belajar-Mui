import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log({ skills });
  console.log({ checked });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleSkillsChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Switch
                  value={"javascript"}
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
