import React from 'react';
import './Layout.css'; // Pastikan Anda memiliki file CSS untuk styling
import Header from './Header';
import About from './About';
import sekolahImage from './images/sekolah.jpg'; // Import gambar dari src/images

const Layout = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <img src={sekolahImage} alt="Hero Image" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our School</h1>
          <p>Learning and Growing Together</p>
        </div>
      </section>
      <About />
    </div>
  );
};

export default Layout;
