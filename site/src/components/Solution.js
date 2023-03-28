/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import '../assets/index.css';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownRoundedIcon style={{ color: '#033E57' }}/>}
    {...props}
  />
))(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  marginBottom: '0',
  paddingBottom: '0',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    marginBottom: '0rem'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(.75),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingTop: '0',
  marginTop: '0'
}));

export default function CustomizedAccordions({solution}) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="flex items-center pt-0 mt-0" aria-controls="panel1d-content" id="panel1d-header">
          <div id="accord-title">SOLUTION</div>
        </AccordionSummary>
        <AccordionDetails className="py-0 my-0">
          <div id="solution">
            {solution}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}