import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from './Logo'
import LogoB from './LogoB'
import Stack from '@mui/material/Stack'
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import AutocompleteExample from './AutoComplete'
import useStore from './Store';
import Dialog from './Dialog'


const searchElements = [
  { title: 'address 1' },
  { title: 'address 2' },
  { title: 'address 3' },
  { title: 'address 4' },
]
function Recent({onGoToLocation, onClose}){
  const {res, setProject} = useStore()
  console.log('res from dialog', res)

  return(
    <Stack
    direction='column'
    justifyContent="center"
    spacing={1}
    sx={{overflow: 'scroll', width: '200px'}}
  >
    <Stack
      direction='column'
      justifyContent="center"
      spacing={1}
      sx={{ overflow: 'scroll', width: '200px' }}
    >
      {
        res.map((project, index) => (
          <Chip
            key={index} // Use a unique identifier for `key` if available
            label={`${project.iri}`} // Convert `project.iri` to a string, if it's not already
            variant='contained'
            onClick={async () => {
              onGoToLocation(project.lat, project.lng, 15)
              onClose()
            }}
            color='primary'
          />
        ))
      }
      </Stack>
    </Stack>
  )
}

export default function PrimaryAppBar({ darkTheme, changeTheme, onGoToLocation }) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='default'
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: '1px solid #323232' }}
        size='small'
      >
      <Toolbar>
        <Stack
          direction='row'
          alignItems="center"
          spacing={1}
          sx={{marginLeft:'-10px'}}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={onGoToLocation}
          >
              <Logo scaled={true}/>
            </IconButton>
            <Dialog
              actionTitle={'OK'}
              buttonLabel={'Projects'}
              buttonColor={'primary'}
              tabs={false}
              tabList={['Recent']}
              dialogTitle={
                <Typography>
                  Projects
                </Typography>
              }
              dialogContent={
                <Recent onGoToLocation={onGoToLocation}/>
              }
            />
        </Stack>
        {!isMobile && <Stack
          direction='row'
          alignItems="center"
          justifyContent="center"
          sx={{width:'72%'}}
          spacing={1}
        >
          <AutocompleteExample title={"Search"} elements={searchElements}/>
        </Stack>
        }
        <Box sx={{ flexGrow: 1 }} />
          <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{marginRight:'-15px'}}
          >
            <Button
              variant="contained"
              size="small"
              color='primary'
              disableElevation
              onClick={onGoToLocation} // Use the passed function as the onClick handler
            >
              Share
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <LogoB/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
