import React, { useState, useEffect } from 'react';
import './styles/carrusel.css'; 

const images = [
    { url: "https://imgur.com/6lf9BIw.jpg", caption: "" },
    { url: "https://imgur.com/BEfNTw6.jpg", caption: "" },
    { url: "https://imgur.com/nfwECFY.jpg", caption: "" },
];

export default function Carrusel() { 
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); 
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (slideIndex) => setIndex(slideIndex);
    
    return (
        <div className="carrusel-container">
            <div className="carrusel">
                {images.map((item, i) => {
                    const isActive = i === index;

                    return (
                        <div key={i} className={`carrusel-item ${isActive ? "active" : ""}`}>
                            <img src={item.url} alt={`Slide ${i}`} />
                            <div className="carrusel-caption">
                                <h2>{item.caption}</h2>
                                <button className="carrusel-shop-btn">Descubre Ahora</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="carrusel-indicators">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`indicator ${i === index ? 'active' : ''}`}
                        onClick={() => goToSlide(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}