import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log({ skills });
  console.log({ acceptTnC });
  const handlechange = (event) => {
    setAcceptTnC(event.target.checked);
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
          label="I accept term and conditions"
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={handlechange}
              size="small"
              color="secondary"
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handlechange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value={"javascript"}
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
