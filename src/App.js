import React, {useRef} from 'react'
import './App.css';
import Box from '@mui/material/Box';
import AppBar from './AppBar'
import { useTheme } from '@mui/material/styles';
import Map from './MapBox'


function App({changeTheme, darkTheme}) {
  const theme = useTheme();
  const mapComponentRef = useRef();
  const triggerGoToLocation = (lat, lang) => {
    if (mapComponentRef.current) {
      mapComponentRef.current.goToLocation(lat, lang);
    }
  };

  return (
    <>
    <AppBar darkTheme={darkTheme} changeTheme={changeTheme} onGoToLocation={triggerGoToLocation}/>
    <Box
        sx={{
          position:'fixed',
          width:'100%',
          height: '100%',
          backgroundColor: `${theme.palette.background.default}`,
          zIndex:-100}}
      >
        <Map ref={mapComponentRef}/>
      </Box>
    </>
  );
}

export default App;
