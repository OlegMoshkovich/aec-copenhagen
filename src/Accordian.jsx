import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion({title, content, expand='false'}) {
  const [expanded, setExpanded] = React.useState(expand);
  const handleChange = () => {
    // Toggle the expanded state
    setExpanded(!expanded);
  };
  return (
      <Accordion elevation={0} expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}
