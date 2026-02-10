import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} aria-label={`Open ${exercise.name} exercise details`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

    <Stack direction="row" flexWrap="wrap" gap={1} mt={1.5} px={2}>
      <Button sx={{ color: '#fff', background: '#6366f1', fontSize: '12px', borderRadius: '999px', textTransform: 'capitalize', fontWeight: 600 }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ color: '#fff', background: '#06b6d4', fontSize: '12px', borderRadius: '999px', textTransform: 'capitalize', fontWeight: 600 }}>
        {exercise.target}
      </Button>
    </Stack>

    <Typography ml="21px" mr="21px" color="#111827" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' }, lineHeight: 1.3 }} mt="14px" pb="14px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
