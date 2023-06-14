import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { Box } from "@mui/material";

const Pie = () => {
    return (
      <Box m="20px">
        <Header title="Pie Chart" subtitle="Simple pie chart"/>
        <Box height="75vh" marginTop="20px"><PieChart/></Box>
        
      </Box>
    );
  };
  
  export default Pie;