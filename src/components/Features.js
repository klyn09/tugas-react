import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <h2>Fitur Utama</h2>
                <div className="feature-item">
                    <h3>Keamanan Tinggi</h3>
                    <p>Lindungi data Anda dengan enkripsi terbaik.</p>
                </div>
                <div className="feature-item">
                    <h3>Akses Mudah</h3>
                    <p>Login sekali untuk mengakses semua layanan.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
