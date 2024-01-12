import { Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
const MenuItem = ({handleChange, value}) => {

  const [expanded, setExpanded] = React.useState('');

  const handleChangeMenu = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      
    <Accordion sx={{boxShadow:'none'}} expanded={expanded === 'panel1'} onChange={handleChangeMenu('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        
      >
        <DraftsTwoToneIcon /><Typography>Dashboard</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
    //   sx={{ borderRight: 1, borderColor: 'divider' }}
    sx={{display:'flex'}}
    >
      <Tab sx={{alignItems:'start'}} disableRipple label='Analytic' {...a11yProps(0)} />
      <Tab sx={{alignItems:'start'}} disableRipple label="CRM" {...a11yProps(1)} />
      <Tab sx={{alignItems:'start'}} disableRipple label="Ecommerce" {...a11yProps(2)} />
      <Tab sx={{alignItems:'start'}} disableRipple label="Academy" {...a11yProps(3)} />
      <Tab sx={{alignItems:'start'}} disableRipple label="Logistics" {...a11yProps(4)} />
    </Tabs>
      </AccordionDetails>
    </Accordion>
    
    
  </div>
  )
}

export default MenuItem