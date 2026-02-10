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
    <Stack alignItems="center" mt="42px" justifyContent="center" p="20px" className="fade-in">
      <Typography
        fontWeight={800}
        sx={{ fontSize: { lg: '48px', xs: '32px' }, lineHeight: 1.2, letterSpacing: '-0.02em' }}
        mb="12px"
        textAlign="center"
      >
        Find the perfect
        <br />
        exercise instantly
      </Typography>
      <Typography color="#6b7280" mb="34px" textAlign="center" sx={{ maxWidth: '740px', fontSize: { xs: '16px', md: '18px' } }}>
        Search by name, muscle group, equipment, or body part. Then filter by categories below to discover routines faster.
      </Typography>

      <Box
        position="relative"
        mb="18px"
        width="100%"
        maxWidth="1180px"
        sx={{
          background: '#fff',
          borderRadius: '18px',
          border: '1px solid #dbe5ff',
          boxShadow: '0 14px 26px rgba(17,24,39,0.08)',
          p: { xs: 1, md: 1.2 },
        }}
      >
        <TextField
          fullWidth
          sx={{
            input: { fontWeight: '700', px: 2, py: { xs: 1.5, md: 2 } },
            '& .MuiOutlinedInput-root': {
              borderRadius: '14px',
              pr: { xs: '90px', lg: '180px' },
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          placeholder="e.g. pull up, chest, cardio, dumbbell"
          type="text"
          aria-label="Search exercises"
        />
        <Button
          className="search-btn"
          sx={{
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '84px' },
            height: '52px',
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: { lg: '19px', xs: '14px' },
            borderRadius: '12px',
            fontWeight: 700,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {showValidation && (
        <Alert severity="info" sx={{ mb: 4, borderRadius: '12px' }}>
          Please type a keyword to search for exercises.
        </Alert>
      )}

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: { xs: '10px', md: '20px' },
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid #e5e7eb',
        }}
      >
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
