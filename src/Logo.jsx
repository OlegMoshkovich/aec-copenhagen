import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';

export default function Logo({scale=1.0}){


return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
<svg width="212" height="212" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="212" height="212" rx="40" fill="#172DEF"/>
</svg>

  </SvgIcon>
)
}
