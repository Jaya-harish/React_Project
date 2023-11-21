
import React from 'react';
import Sidebar from '../Sidebar';
import './Home.css';
import img2 from './images/img2.png';
const Home = () => {
  return (
    <div className='karna1'>
      <Sidebar />
      <div className='background-image' style={{ backgroundImage: `url(${img2})` }}>
      <h2><i>4000+ PATIENTS RECORDS | 7500+ SOLUTIONS | 1000+ DOCTORS</i></h2>
      </div>
    </div>
      );
};

export default Home;
