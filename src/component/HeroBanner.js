import React from 'react';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box className="fade-in" sx={{ mt: { lg: '26px', xs: '30px' }, p: { xs: '8px', md: '16px' } }} position="relative">
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Box sx={{ ml: { sm: '20px', lg: '40px' } }}>
            <Chip label="Train smarter, not harder" sx={{ mb: 2, bgcolor: '#ecfeff', color: '#155e75', fontWeight: 600 }} />
            <Typography
              fontWeight={800}
              sx={{
                fontSize: { lg: '64px', md: '54px', xs: '38px' },
                lineHeight: 1.05,
                background: 'linear-gradient(120deg, #111827 0%, #4f46e5 60%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              mb="18px"
            >
              Elevate Your
              <br />
              Fitness Journey
            </Typography>

            <Typography fontSize={{ xs: '18px', md: '22px' }} fontFamily="Alegreya" lineHeight="1.5" color="#4b5563" maxWidth="580px">
              Discover professional workout routines, target the right muscle groups, and stay consistent with guidance designed for real results.
            </Typography>

            <Stack direction="row" spacing={2.5} alignItems="center" mt={4}>
              <a
                href="#exercises"
                style={{
                  textDecoration: 'none',
                  minWidth: '220px',
                  textAlign: 'center',
                  background: 'linear-gradient(120deg, #4f46e5 0%, #06b6d4 100%)',
                  padding: '13px 20px',
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  borderRadius: '999px',
                  boxShadow: '0 15px 34px rgba(79, 70, 229, 0.35)',
                }}
              >
                Explore Exercises
              </a>
              <Typography color="#6b7280" sx={{ display: { xs: 'none', md: 'block' } }}>
                1300+ movements available
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box sx={{ textAlign: 'center' }} className="float">
            <img src={HeroBannerImage} alt="Woman exercising with dumbbells" className="hero-banner-img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
