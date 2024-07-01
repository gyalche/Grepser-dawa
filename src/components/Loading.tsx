import { Box, Skeleton } from '@mui/material';

const Loading = ({ totalLoading }: any) => {
  return (
    <Box>
      {totalLoading?.map((data: any) => (
        <Skeleton key={data} animation='wave' style={{ minWidth: '350px' }} />
      ))}
    </Box>
  );
};

export default Loading;
