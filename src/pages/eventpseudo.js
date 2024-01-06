import React from 'react'
import Navbar from '../Components/Navbar';
import EventHeroSection from '../Components/EventHeroSection';
import Footer from '../Components/Footer';
import ScrollToTopButton from '../Components/Scroller/Scroller'
import PastEventSectionPseudo from '../Components/PastEventSectionPseudo';

const EventPagePseudo = () => {
  return (
    <div>
        <Navbar/>
        <EventHeroSection />
        <PastEventSectionPseudo />
        <ScrollToTopButton />
        <Footer/>
    </div>
  );
};

export default EventPagePseudo;