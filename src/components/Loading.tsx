import { Box, Skeleton } from '@mui/material'
import React from 'react'

const Loading = ({totalLoading}:any) => {
  return (
    <Box>
      {totalLoading?.map((data:any)=>(
          <Skeleton animation="wave"  style={{minWidth:'350px' }}/>
      ))}
    </Box>
  )
}

export default Loading