import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';

export default function Logo({scale=1.0}){


return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27" cy="27" r="25.5" stroke="#204F2B" stroke-width="3"/>
<path d="M13 34L27 20L41 34" stroke="#204F2B" stroke-width="8"/>
</svg>


  </SvgIcon>
)
}
