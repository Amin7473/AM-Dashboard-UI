import { Box,useTheme,Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page"/>
      <Box sx={{marginTop:"20px"}} display="flex" flexDirection="column">
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">
              What is the quantum theory
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography color={colors.grey[100]} variant="h6">
              Here are the details. <br />
              <ul>
                <li>This project must be finished on time</li>
                <li>It must be done with utmost perfection</li>
                <li>There must be no pending errors</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">
              Name another planet than pluto
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography color={colors.grey[100]} variant="h6">
              Here are the details. <br />
              <ul>
                <li>This project must be finished on time</li>
                <li>It must be done with utmost perfection</li>
                <li>There must be no pending errors</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">
              Is the battery replaceable
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography color={colors.grey[100]} variant="h6">
              Here are the details. <br />
              <ul>
                <li>This project must be finished on time</li>
                <li>It must be done with utmost perfection</li>
                <li>There must be no pending errors</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">
              How durable is the quality
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography color={colors.grey[100]} variant="h6">
              Here are the details. <br />
              <ul>
                <li>This project must be finished on time</li>
                <li>It must be done with utmost perfection</li>
                <li>There must be no pending errors</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">
              Where to exchange the product
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography color={colors.grey[100]} variant="h6">
              Here are the details. <br />
              <ul>
                <li>This project must be finished on time</li>
                <li>It must be done with utmost perfection</li>
                <li>There must be no pending errors</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">
              When can I expect the refund.
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography color={colors.grey[100]} variant="h6">
              Here are the details. <br />
              <ul>
                <li>This project must be finished on time</li>
                <li>It must be done with utmost perfection</li>
                <li>There must be no pending errors</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Box>  
    </Box>
  );
  };
  
  export default FAQ;