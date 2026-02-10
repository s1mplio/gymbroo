import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '26px', xs: '36px' }, p: { xs: '10px', md: '20px' } }} position="relative">
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Box sx={{ ml: { sm: '20px', lg: '50px' } }}>
            <Typography color="#FF2625" fontWeight="700" fontSize={{ xs: '22px', md: '26px' }}>
              Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '56px', xs: '38px' }, lineHeight: 1.12 }} mb="18px" mt="20px">
              Sweat, Smile <br />
              and Repeat
            </Typography>
            <Typography fontSize={{ xs: '18px', md: '22px' }} fontFamily="Alegreya" lineHeight="1.5" color="#5f4d4d">
              Discover simple, effective exercises and build routines that match your goals.
            </Typography>
            <Stack>
              <a
                href="#exercises"
                style={{
                  marginTop: '30px',
                  textDecoration: 'none',
                  width: '220px',
                  textAlign: 'center',
                  background: '#FF2625',
                  padding: '14px',
                  fontSize: '20px',
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'white',
                  borderRadius: '999px',
                  boxShadow: '0 10px 24px rgba(255, 38, 37, 0.3)',
                }}
              >
                Explore Exercises
              </a>
            </Stack>
            <Typography
              fontWeight={600}
              color="#FF2625"
              sx={{
                opacity: '0.08',
                display: { lg: 'block', xs: 'none' },
                fontSize: '150px',
                lineHeight: 1,
                mt: 1,
              }}
            >
              Exercise
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={HeroBannerImage} alt="Woman exercising with dumbbells" className="hero-banner-img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
