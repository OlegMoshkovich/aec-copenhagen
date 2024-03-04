import React, {useState, useRef} from 'react'
import './App.css';
import useStore from './Store';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AppBar from './AppBar'
import Drawer from './SideDrawer3'
import PropertiesList from './PropertiesList'
import MobileDrawer from './DrawerMobile'
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import ChatUI from './ChatUI'
import Close from '@mui/icons-material/Close';
import Map from './MapBox'
import CircularProgress from '@mui/material/CircularProgress';


function App({changeTheme, darkTheme}) {
  const {
    rightDrawer,
    toggleRightDrawer,
    showViewer
  } = useStore();

  const [showChatUI, setShowChatUI] = useState(false)
  const [viewerLoading, setViewerLoading] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const mapComponentRef = useRef();


  const PropertiesButtons = () => {
    return(
      <IconButton aria-label="comments" size='small'>
        <AddIcon fontSize='small'/>
      </IconButton>
    )
  }
  const triggerGoToLocation = (lat, lang) => {
    if (mapComponentRef.current) {
      mapComponentRef.current.goToLocation(lat, lang);
    }
  };


  return (
    <>
    <AppBar darkTheme={darkTheme} changeTheme={changeTheme} onGoToLocation={triggerGoToLocation}/>
    {!isMobile &&
      <Drawer
        topPanelName={'Info'}
        topPanel={<PropertiesList/>}
        topPanelButton={<PropertiesButtons/>}
        side={'right'}
        isOpen={rightDrawer}
        setIsOpen={toggleRightDrawer}
        showFirstPanel={true}
        showSecondPanel={false}
      />
    }
    {isMobile && <MobileDrawer panels={[<PropertiesList/>]}/>}
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

      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed', right: (rightDrawer && !isMobile) ? '400px' : '20px', top: '77px', height:'82%'}}
      >
        {!isMobile &&
          <Stack spacing={0}>
            <Tooltip placement={'left'} title={'Information'}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={()=>toggleRightDrawer()}
            >
              <MenuOutlinedIcon size='inherit' color={rightDrawer ? 'primary' : 'default'}/>
            </IconButton>
            </Tooltip>
          </Stack>
        }
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={()=>setViewerLoading(!viewerLoading)}
        />
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          sx={{border:'1px solid #F2B138'}}
          onClick={()=>setShowChatUI(!showChatUI)}
        >
          <Typography variant='overline' sx={{width:30, height:30, fontWeight:'bold'}}>
            GPT
          </Typography>
        </IconButton>
      </Stack>

      {(showChatUI && !isMobile) &&
        <Box
        sx={{
          position: 'fixed',
          bottom: '7%',
          right: rightDrawer ? '450px' : '70px',
        }}
        >
          <ChatUI closeWindow={()=>setShowChatUI(false)}/>
        </Box>
      }

      {(showChatUI && isMobile) &&
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'fixed',
          top: '140px',
          width: '100%',
        }}
        >
          <ChatUI closeWindow={()=>setShowChatUI(false)}/>
        </Stack>
      }
              {
        showViewer &&
        <Stack
        id='viewer'
        spacing={1}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          position:'absolute',
          top:120,
          left:10,
          width:360,
          height:360,
          color:'white',
          backgroundColor:'#0D0D0D',
          borderRadius:'20px'}}>
            <CircularProgress color='primary' />
            <Typography variant='overline' >Loading a model</Typography>
          </Stack>
        }
      {
        viewerLoading &&
        <Box
        id='viewer'
        sx={{
          position:'absolute',
          top:120,
          left:10,
          width:360,
          height:360,
          backgroundColor:'#0D0D0D',
          borderRadius:'20px'}}>
        <IconButton
          size="small"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          sx={{position:'absolute', right:'10px', top:'18px'}}
          onClick={()=>setViewerLoading(false)}
        >
          <Close size='inherit' color={showChatUI ? "primary" : "default"} />
        </IconButton>
          <iframe
            style={{borderRadius: '10px', border:'2px solid #F2B138'}}
            src="https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/bldrs-ai/test-models/main/MC-ARCH_2019_w_rooms.ifc/106/2701979/116/211/178372/178543#c:102.999,12.491,124.849,-15.437,-23.396,-9.741" width="360" height="360" frameborder="0">
                Your browser does not support iframes.
          </iframe>
          </Box>
        }
    </>
  );
}

export default App;
