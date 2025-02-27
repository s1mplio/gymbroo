import React,{useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../component/HeroBanner';
import SearchExercises from '../component/SearchExercises';
import Exercises from '../component/Exercises';




const Home = () => {

    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises  setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home
