import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              itaque magni. Omnis libero veritatis ipsam nostrum odio ab odit
              dignissimos ea, quae est. Eius ex nihil consequatur, distinctio
              totam possimus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              itaque magni. Omnis libero veritatis ipsam nostrum odio ab odit
              dignissimos ea, quae est. Eius ex nihil consequatur, distinctio
              totam possimus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              itaque magni. Omnis libero veritatis ipsam nostrum odio ab odit
              dignissimos ea, quae est. Eius ex nihil consequatur, distinctio
              totam possimus.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <hr />
      <div>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
        >
          <AccordionSummary
            id="panel4-header"
            aria-controls="panel4-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              itaque magni. Omnis libero veritatis ipsam nostrum odio ab odit
              dignissimos ea, quae est. Eius ex nihil consequatur, distinctio
              totam possimus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
        >
          <AccordionSummary
            id="panel5-header"
            aria-controls="panel5-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              itaque magni. Omnis libero veritatis ipsam nostrum odio ab odit
              dignissimos ea, quae est. Eius ex nihil consequatur, distinctio
              totam possimus.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel6")}
        >
          <AccordionSummary
            id="panel6-header"
            aria-controls="panel6-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              itaque magni. Omnis libero veritatis ipsam nostrum odio ab odit
              dignissimos ea, quae est. Eius ex nihil consequatur, distinctio
              totam possimus.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
