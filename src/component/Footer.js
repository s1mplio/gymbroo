import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="90px" sx={{ borderRadius: '18px 18px 0 0', bgcolor: '#eef2ff', border: '1px solid #dbe3ff' }}>
    <Stack gap="24px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="30px">
      <img src={Logo} alt="GymBroo logo" style={{ width: '200px', height: '41px' }} />
      <Typography color="#4f46e5" fontWeight={600}>
        Stay strong. Stay consistent.
      </Typography>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '22px', xs: '18px' }, color: '#374151' }} mt="16px" textAlign="center" pb="30px">
      Crafted with ❤️ for your fitness goals
    </Typography>
  </Box>
);

export default Footer;
