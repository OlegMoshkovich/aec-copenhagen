import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useStore from './Store';
import ListItem from '@mui/material/ListItem';
import Accordion from './Accordian';
const drawerWidth = 380;


export default function SideDrawer2({
    side,
    isOpen,
    setIsOpen,
    topPanel,
    topPanelName,
    bottomPanelName,
    showFirstPanel=true,
    showSecondPanel=true,
  }) {
  const [isFirstPanel, setIsFirstPanel] = React.useState(true)
  const [isSecondPanel, setIsSecondPanel] = React.useState(true)

  const [firstPanel, setFirstPanel] = React.useState('first')
  const {project} = useStore()

  useEffect(()=>{
    setIsFirstPanel(showFirstPanel)
    setIsSecondPanel(showSecondPanel)
  },[])


  useEffect(() => {
    if(!isFirstPanel && !isSecondPanel){
      setIsOpen()
      setIsFirstPanel(true)
      setIsSecondPanel(true)
    }
  }, [setIsFirstPanel, setIsSecondPanel, isFirstPanel, isSecondPanel, setIsOpen])

  const handlePanelSelectionFirst = (event) => {
    const panel = event.target.value;
    console.log('panel', panel)
    if (panel === 'top') {
      setFirstPanel('first')
    } else if (panel === 'bottom') {
      setFirstPanel('second')
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="temporary"
        disableEnforceFocus
        anchor={side}
        open={isOpen}
        color='primary'
        elevation={0}
        hideBackdrop
        disableScrollLock
        ModalProps={{
          slots: { backdrop: "div" },
          slotProps: {
            root: { //override the fixed position + the size of backdrop
              style: {
                position: "absolute",
                top: "unset",
                bottom: "unset",
                left: "unset",
                right: "unset",
              },
            },
          },
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            backgroundColor: (theme) => theme.palette.background.default,
            boxSizing: 'border-box',
            borderLeft: '1px solid #323232',
            overflow:'hidden'},

        }}
      >
        <Toolbar />
            {(isFirstPanel) &&
              <Box
                sx={{
                  minHeight:'50%',
                  overflow: 'scroll'
                }}>
                <List
                  spacing={1}
                  >
                    <ListSubheader>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{height: '40px'}}
                    >
                      <FormControl variant="standard"
                         sx={{
                          m: 1,
                          color: 'default',
                          '& .MuiInput-underline:after': {
                            borderBottom: 'none', // remove the bottom border when focused
                          },
                          '& .MuiInput-underline:before': {
                            borderBottom: 'none', // remove the initial bottom border
                          },
                        }}>
                           <Select
                            value={firstPanel === 'first' ? 'top' : 'bottom'}
                            onChange={handlePanelSelectionFirst}
                            displayEmpty
                            size='small'
                            sx={{
                              '& .MuiPaper-root': {
                                borderRadius: 0, // this sets the dropdown's border radius to 0
                              },
                            }}
                          >
                            <MenuItem value="top">{topPanelName}</MenuItem>
                            <MenuItem value="bottom">{bottomPanelName}</MenuItem>
                          </Select>
                      </FormControl>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={.5}

                        >
                        <IconButton aria-label="comments" size='small' onClick={()=>setIsOpen()}>
                          <CloseIcon fontSize='small'/>
                        </IconButton>
                      </Stack>
                      </Stack>
                    </ListSubheader>
                    <Stack   >
                      <List
                      spacing={1}

                      >
                        {topPanel}
                      </List>
                  </Stack>
                </List>
              </Box>
            }
      </Drawer>
    </Box>
  );
}
