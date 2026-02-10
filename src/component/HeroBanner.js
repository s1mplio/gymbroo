import React from 'react';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box className="fade-in" sx={{ mt: { lg: '20px', xs: '20px' }, p: { xs: '8px', md: '12px' }, overflowX: 'clip' }} position="relative">
      <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">

        <Grid item xs={12} lg={7} sx={{ minWidth: 0 }}>
          <Box sx={{ ml: { sm: '12px', lg: '28px' } }}>
            <Chip label="Train smarter, not harder" sx={{ mb: 1.5, bgcolor: '#ecfeff', color: '#155e75', fontWeight: 600 }} />
            <Typography
              fontWeight={800}
              sx={{
                fontSize: { lg: '56px', md: '46px', xs: '34px' },
                lineHeight: 1.08,
                background: 'linear-gradient(120deg, #111827 0%, #4f46e5 60%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              mb="14px"
            >
              Elevate Your
              <br />
              Fitness Journey
            </Typography>

            <Typography fontSize={{ xs: '17px', md: '20px' }} fontFamily="Alegreya" lineHeight="1.5" color="#4b5563" maxWidth="560px">
              Discover professional workout routines, target the right muscle groups, and stay consistent with guidance designed for real results.
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" mt={3} flexWrap="wrap" useFlexGap>
              <a
                href="#exercises"
                style={{
                  textDecoration: 'none',
                  minWidth: '200px',
                  textAlign: 'center',
                  background: 'linear-gradient(120deg, #4f46e5 0%, #06b6d4 100%)',
                  padding: '12px 18px',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#fff',
                  borderRadius: '999px',
                  boxShadow: '0 12px 26px rgba(79, 70, 229, 0.28)',
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

        <Grid item xs={12} lg={5} sx={{ minWidth: 0 }}>
          <Box sx={{ textAlign: 'center', mt: { xs: 0.5, lg: 0 }, px: { xs: 0.5, sm: 0 } }} className="float">
            <img src={HeroBannerImage} alt="Woman exercising with dumbbells" className="hero-banner-img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
