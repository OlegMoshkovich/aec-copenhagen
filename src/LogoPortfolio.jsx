import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';

export default function Logo({scale=1.0}){


return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
<svg width="212" height="212" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="212" height="212" rx="40" fill="#172DEF"/>
<circle cx="123.246" cy="97" r="35" stroke="#E9B352" stroke-width="18"/>
<rect x="44" y="143.006" width="59.7611" height="22.7679" rx="10" transform="rotate(-34.6831 44 143.006)" fill="#E9B352"/>
</svg>

  </SvgIcon>
)
}
