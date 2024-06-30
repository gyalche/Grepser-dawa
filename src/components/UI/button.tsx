import { Box, Button } from '@mui/material';
import React from 'react'

interface buttons{
    text?:string;
    bg?:string;
    onClick?:()=>void;
    styles:any;
    variant?:"contained" | "text" | "outlined";
    icon?:any;
}
const MyButton = ({text,variant, icon, styles}:buttons) => {
  return (
    <Box sx={{display:'inline-block'}}>
        <Button variant={variant} sx={styles}>
           <img src={icon}/>
            {text}</Button>
    </Box>
  )
}

export default MyButton