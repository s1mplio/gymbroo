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
            borderTop: '4px solid #FF2625',
            background: '#fff',
            borderBottomLeftRadius: '20px',
            borderRadius: '20px',
            width: { xs: '220px', md: '250px', lg: '270px' },
            height: { xs: '220px', md: '250px', lg: '282px' },
            cursor: 'pointer',
            gap: '20px',
            boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
          }
        : {
            background: '#fff',
            borderBottomLeftRadius: '20px',
            borderRadius: '20px',
            border: '1px solid #ffe7e8',
            width: { xs: '220px', md: '250px', lg: '270px' },
            height: { xs: '220px', md: '250px', lg: '282px' },
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
    <img src={Icon} alt="dumbbell icon" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize={{ xs: '20px', lg: '24px' }} fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
