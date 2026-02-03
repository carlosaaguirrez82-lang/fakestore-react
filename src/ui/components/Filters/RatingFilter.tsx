import { Rating } from '@mui/material';
import Box from '@mui/material/Box';

const RatingFilter = () => {
  return (
    <Box sx={{ mb: 3 }}>
        <Rating name="size-large" defaultValue={0} size="large" />
    </Box>
  )
}

export default RatingFilter