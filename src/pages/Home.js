import React from 'react';
import { Container } from '@chakra-ui/react'; // Import Container component from Chakra UI
import HeroSection from '../components/HeroSection';
import Content from '../components/Content';
import Atropos from '../components/Atropos';
import Atrocat from '../components/Atrocat';


function Home() {
  return (
    <Container maxW="container.lg"> {/* Use Container component from Chakra UI */}
      <HeroSection />
      <Content />
      <Atropos />
      <Atrocat />
    </Container>
  );
}

export default Home;
