'use client';
import MainPoster from '@/components/Festivals/Janmastmi/01MainPoster/MainPoster';
import DonationSection from '@/components/Festivals/Janmastmi/04DonationSection/DonationSection';
import React from 'react';

const Janmastami = () => {
  return (
    <div style={{
      background: '#cc2b5e', /* fallback for old browsers */
      background: '-webkit-linear-gradient(to right, #753a88, #cc2b5e)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to right, #753a88, #cc2b5e)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }}>
        <MainPoster />
        <DonationSection />
    </div>
  );
};

export default Janmastami;
