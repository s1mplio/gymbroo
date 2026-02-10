import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '20px' },
        mt: { sm: '24px', xs: '12px' },
        py: 1.5,
        px: { xs: 1, sm: 2 },
        borderRadius: '16px',
        backgroundColor: '#ffffffd9',
        backdropFilter: 'blur(4px)',
        border: '1px solid #ffe4e6',
        boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
      }}
    >
      <Link to="/" aria-label="Go to homepage">
        <img src={Logo} alt="GymBroo logo" style={{ width: '48px', height: '48px' }} />
      </Link>

      <Stack direction="row" gap={{ xs: 2, sm: 4 }} fontFamily="Alegreya" fontSize={{ xs: '20px', sm: '24px' }} alignItems="center">
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', paddingBottom: '2px' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
          Exercises
        </a>
      </Stack>

      <Typography sx={{ display: { xs: 'none', md: 'block' }, color: '#7a5858', fontSize: '0.95rem' }}>
        Start your daily workout
      </Typography>
    </Stack>
  );
};

export default Navbar;
