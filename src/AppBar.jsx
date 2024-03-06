import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from './LogoSP'
import LogoB from './LogoB'
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery';
import AutocompleteExample from './AutoComplete'
import Dialog from './Dialog'
import Projects from './Projects'
import { useTheme } from '@mui/material/styles';


const searchElements = [
  { title: 'address 1' },
  { title: 'address 2' },
  { title: 'address 3' },
  { title: 'address 4' },
]


export default function PrimaryAppBar({ darkTheme, changeTheme, onGoToLocation }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme()

  return (
      <AppBar
        color='secondary'
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: `1px solid ${theme.palette.background.paper}`, backgroundColor: theme.palette.background.default }}
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
            sx={{border:'none'}}
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
                <Projects onGoToLocation={onGoToLocation}/>
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
              sx={{border:'none'}}
            >
              <LogoB/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
  );
}
