import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    const query = search.trim().toLowerCase();

    if (!query) {
      setShowValidation(true);
      return;
    }

    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1324&offset=0', exerciseOptions);

    const searchedExercises = exercisesData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.target.toLowerCase().includes(query) ||
        item.equipment.toLowerCase().includes(query) ||
        item.bodyPart.toLowerCase().includes(query),
    );

    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    setShowValidation(false);
    setSearch('');
    setExercises(searchedExercises);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="16px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Typography color="#6b5a5a" mb="36px" textAlign="center" sx={{ maxWidth: '700px' }}>
        Search by exercise name, target muscle, equipment, or body part.
      </Typography>

      <Box position="relative" mb="22px" width="100%" maxWidth="1170px">
        <TextField
          fullWidth
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px', px: 2 },
            backgroundColor: '#fff',
            borderRadius: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              pr: { xs: '90px', lg: '180px' },
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          placeholder="Try: pull up, chest, cardio, dumbbell..."
          type="text"
          aria-label="Search exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '84px' },
            height: '56px',
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: { lg: '20px', xs: '14px' },
            borderRadius: '999px',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {showValidation && (
        <Alert severity="info" sx={{ mb: 4 }}>
          Please type a keyword to search for exercises.
        </Alert>
      )}

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
