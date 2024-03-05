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
import Dialog from './Dialog'
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import ChatUI from './ChatUI'
import Close from '@mui/icons-material/Close';
import Map from './MapBox'
import CircularProgress from '@mui/material/CircularProgress';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TryOutlinedIcon from '@mui/icons-material/TryOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Logo from './Logo'




const AboutShare = () => {
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
    <Typography variant='body1' color='default'>
      Portfolio is a project completed during AEC hackathon in Copenhagen.
    </Typography>
    <Typography variant='body1'>
      It was created in response to the challenge posted by Prop tech Denmark.
    </Typography>
    <Typography variant='body1'>
      It's mission is to serve as an agreggator of project informaiton for the organizations that management large real estate portfolios.
    </Typography>
  </Stack>
  )
}

const Help = () => {
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
    <Typography variant='body1' color='default'>
      Click on the cube to get access to the 3d model of the project.
    </Typography>
    <Typography variant='body1'>
      Click on the chat to engage chatGPT.
    </Typography>
  </Stack>
  )
}

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
        sx={{position:'fixed',  left:'22px', top: '84px', height:'88%', zIndex:100}}
      >
          <Dialog
            iconButton={true}
            tabs={true}
            tabList={['Project Info', 'Help']}
            dialogTitle={
            <Stack
            alignItems={'center'}
            justifyContent={'center'}
            direction='row'
            spacing={2}
            >
              <Logo/>
                <Typography variant={'body1'} color='primary'>
                Portfolio
                </Typography>
              </Stack>
            }
            dialogContent1={
              <AboutShare/>
            }
            dialogContent2={
              <Help/>
            }
            icon={<HelpOutlineIcon size='inherit' color='primary'/>}
          />
      </Stack>

      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed', right: (rightDrawer && !isMobile) ? '400px' : '20px', top: '77px', height:isMobile?'73%':'82%'}}
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
        >
          <ViewInArIcon size='inherit' color={viewerLoading ? 'primary' : 'default'}/>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          selected={showChatUI}
          onClick={()=>setShowChatUI(!showChatUI)}
        >
          <TryOutlinedIcon size='inherit' color={showChatUI ? 'primary' : 'default'}/>
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
          bottom: '120px',
          right: '26px',
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
          top:isMobile? 150:120 ,
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
            src="https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/bldrs-ai/test-models/main/ifc/misc/haus.ifc" width="360" height="360" frameborder="0">
                Your browser does not support iframes.
          </iframe>
          </Box>
        }
    </>
  );
}

export default App;
