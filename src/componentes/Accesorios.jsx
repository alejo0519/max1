

import React from 'react';
import Nav from "./Nav";
import { Link } from "react-router-dom";
import './styles/accesorios.css'; 

const accessoriesData = [
    { id: 'a1', name: 'Max trueno', price: '120.000', priceValue: 120.000, image: 'https://imgur.com/wUHOFNk.jpg' }, 
    { id: 'a3', name: 'Camisa poker', price: '80.000', priceValue: 80.000, image: 'https://imgur.com/faZRgk9.jpg' },
    { id: 'a4', name: 'Maleta saeta Pro', price: '100.000', priceValue: 100.000, image: 'https://imgur.com/gAMIbxL.jpg' },
    { id: 'a5', name: 'Micreros', price: '150.000', priceValue: 150.000, image: 'https://imgur.com/zvBcIRJ.jpg' },
    { id: 'a6', name: 'Peto Resistencia', price: '32.000', priceValue: 32.000, image: 'https://imgur.com/0KFLnMD.jpg' },
    { id: 'a6', name: 'Camisa saeta', price: '60.000', priceValue: 32.000, image: 'https://imgur.com/hWhdG0v.jpg' },
];


export default function Accesorios({ onAddToCart }) { 
    
   
    const handleAddToCart = (product) => {

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.priceValue,
            quantity: 1, 
            image: product.image
        };
        
       
        if (onAddToCart) {
            onAddToCart(cartItem);
            alert(`"${product.name}" agregado al carrito!`); 
        } else {
           
            console.error("onAddToCart prop is missing on Accesorios component.");
            alert("No se pudo agregar al carrito: Error de configuración.");
        }
    };
    
    return (
        <div className="accesorios-page-container">
            <Nav />
            <h2 className="section-title">Catálogo Completo de Accesorios</h2>
            
            <div className="product-grid">
                {accessoriesData.map(item => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.name} className="product-image"/>
                        <h3>{item.name}</h3>
                        <p className="price">{item.price}</p>
                      
                        <button 
                            className="buy-button"
                            onClick={() => handleAddToCart(item)} 
                        >
                            Añadir al Carrito
                        </button>
                    </div>
                ))}
            </div>
            
            <footer className="footer-main">
                <p>© 2023 MaxDep Sport. Accesorios de calidad.</p>
            </footer>
        </div>
    );
}

