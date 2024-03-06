import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from './LogoSP'
import Stack from '@mui/material/Stack'
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import AutocompleteExample from './AutoComplete'
import useStore from './Store';
import Dialog from './Dialog'




 export default function Projects({onGoToLocation, onClose}){
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
              onGoToLocation(project.lat, project.lng, 14)
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
