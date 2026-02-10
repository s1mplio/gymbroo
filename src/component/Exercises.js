import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises = [], setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true);
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
      setCurrentPage(1);
      setLoading(false);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (loading) return <Loader />;

  return (
    <Box id="exercises" className="fade-in" sx={{ mt: { lg: '90px' } }} mt="40px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          background: 'linear-gradient(120deg, #111827 0%, #4338ca 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        mb="8px"
      >
        Showing Results
      </Typography>

      <Typography color="#6b7280" mb="34px" sx={{ fontSize: '1.06rem' }}>
        {exercises.length} exercises found for <b style={{ color: '#4338ca' }}>{bodyPart}</b>
      </Typography>

      {exercises.length === 0 ? (
        <Typography sx={{ fontSize: '20px', color: '#4b5563', p: 2, background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          No exercises found. Try another keyword or body part.
        </Typography>
      ) : (
        <>
          <Stack direction="row" sx={{ gap: { lg: '34px', xs: '24px' } }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack sx={{ mt: { lg: '80px', xs: '50px' } }} alignItems="center">
            {exercises.length > exercisesPerPage && (
              <Pagination
                color="primary"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Exercises;
