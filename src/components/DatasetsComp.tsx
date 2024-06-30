import { Box, Button, Switch, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import MyButton from './UI/button'
import FilterIcon from '../assets/filterIcon.png'
import Visibleoff from '../assets/visibleoff.png'
import download from '../assets/download.png'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/user'
import MyTable from './Table'
import headTag from '../assets/HeadTag.png'
const label = { inputProps: { 'aria-label': 'Size switch demo' } };
const DatasetsComp = () => {
  const [on, setOn]=useState<boolean>(false);

  const {data:usersData, isSuccess, isLoading}=useQuery('users', getUsers);

  console.log("this is usersData", isLoading)
  return (
    <Box>
      <Box sx={{display:'flex',width:'100%', gap:'10px',justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        <Box sx={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
        <MyButton text="Operations" variant="contained" styles={{backgroundColor:'#1276FF', color:'white'}}/>
        <MyButton text="Add Filters" icon={FilterIcon} styles={{backgroundColor:'white', color:'black', display:'flex', gap:'10px'}}/>
        </Box>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <Box sx={{
            display:{
              xs:'flex'
            },
            gap:{
              xs:'2px',
              sm:'20px'
            }
            , justifyContent:{
              xs:'start'
            }
          }}>
            <Box className='flex_center'>

            <Typography sx={{fontSize:'14px', fontWeight:500, minWidth:'70px'}}>Edit Mode</Typography>
                <Tooltip title={on ? "ON" : "OFF"}>
                <Switch {...label} checked={on} sx={{
              '& .MuiSwitch-thumb': {
                color: '#2196f3', 
                value:'ON'
                // Blue color for the thumb (circle)
              },
              '& .Mui-checked': {
                color: '#2196f3', // Blue color for the track when checked
              },
            }}
            onClick={() => setOn(!on)}/>
                </Tooltip>
            </Box>
        <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
          <MyButton icon={Visibleoff} text={`Show Metadata`} styles={{color:'black', gap:'10px', backgroundColor:'white', minWidth:'180px'}}/>
          <Box sx={{height:'40px', width:'40px', cursor:'pointer'}}>
            <img src={download} style={{height:'inherit', objectFit:'contain'}}/>
          </Box>
        </Box>
          </Box>
        </Box>
      </Box>
      {/*Tables*/}
      <Box mt={4}>
      <MyTable headIcon={[headTag, FilterIcon]} heading={["Name", "Phone", "Email", "Website", "Address"]} data={usersData} loading={isLoading}/>
      </Box>
    </Box>
  )
}

export default DatasetsComp