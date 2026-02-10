import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    role="button"
    tabIndex={0}
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            border: '1px solid #c7d2fe',
            background: 'linear-gradient(180deg, #ffffff 0%, #eef2ff 100%)',
            borderRadius: '20px',
            width: { xs: '220px', md: '250px', lg: '270px' },
            height: { xs: '220px', md: '250px', lg: '280px' },
            cursor: 'pointer',
            gap: '20px',
            boxShadow: '0 12px 24px rgba(79,70,229,0.18)',
          }
        : {
            background: '#fff',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            width: { xs: '220px', md: '250px', lg: '270px' },
            height: { xs: '220px', md: '250px', lg: '280px' },
            cursor: 'pointer',
            gap: '20px',
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }
    }}
  >
    <img src={Icon} alt="dumbbell icon" style={{ width: '44px', height: '44px' }} />
    <Typography fontSize={{ xs: '20px', lg: '24px' }} fontWeight="bold" fontFamily="Alegreya" color="#1f2937" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
