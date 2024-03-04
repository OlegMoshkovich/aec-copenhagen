import './App.css';
import Map from './MapBox'
import Box from '@mui/material/Box';


function App() {
  return (
    <Box
    sx={{
      position:'fixed',
      width:'100%',
      height: '100%',
      zIndex:-100}}
  >
    <Map/>
  </Box>
  );
}

export default App;
