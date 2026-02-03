import Box from '@mui/material/Box';
import SearchField from './SearchField';
import RatingFilter from './RatingFilter';
import PriceFilter from './PriceFilter';

const FiltersComponent = () => {
  return (
    <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
      <SearchField />
      <Box sx={{ width: 20 }} />
      <PriceFilter />
      <Box sx={{ width: 20 }} />
      <RatingFilter />
    </Box>
  )
}

export default FiltersComponent