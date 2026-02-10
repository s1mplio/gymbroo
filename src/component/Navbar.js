import React from 'react';
import { Link } from 'react-router-dom';
import { Chip, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const linkStyle = {
  textDecoration: 'none',
  color: '#1f2937',
  fontWeight: 600,
};

const Navbar = () => {
  return (
    <Stack
      className="fade-in"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mt: { sm: '24px', xs: '12px' },
        py: 1.5,
        px: { xs: 1.5, sm: 2.5 },
        borderRadius: '18px',
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid #e5e7eb',
        boxShadow: '0 10px 30px rgba(17, 24, 39, 0.08)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Link to="/" aria-label="Go to homepage">
        <Stack direction="row" alignItems="center" gap={1}>
          <img src={Logo} alt="GymBroo logo" style={{ width: '44px', height: '44px' }} />
          <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', display: { xs: 'none', sm: 'block' } }}>
            GymBroo
          </Typography>
        </Stack>
      </Link>

      <Stack direction="row" gap={{ xs: 2, sm: 4 }} fontFamily="Alegreya" fontSize={{ xs: '19px', sm: '23px' }} alignItems="center">
        <Link to="/" style={{ ...linkStyle, borderBottom: '3px solid #4f46e5', paddingBottom: 2 }}>Home</Link>
        <a href="#exercises" style={linkStyle}>
          Exercises
        </a>
      </Stack>

      <Chip
        label="Build your best body"
        size="small"
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontWeight: 600,
          color: '#4338ca',
          border: '1px solid #c7d2fe',
          bgcolor: '#eef2ff',
        }}
      />
    </Stack>
  );
};

export default Navbar;
