import React, { useState, useMemo } from 'react';
import Nav from "./Nav"; 
import { Link } from "react-router-dom";

import './styles/carrito.css'; 
import './styles/inicio.css'; 

// 👇 Usa valores numéricos reales
const initialCartItems = [
    { id: 1, name: 'Max trueno', price: 120000, quantity: 2, image: 'https://imgur.com/wUHOFNk.jpg' },
    { id: 2, name: 'Camisa saeta', price: 60000, quantity: 1, image: 'https://imgur.com/hWhdG0v.jpg' },
    { id: 3, name: 'Peto resistencia', price: 32000, quantity: 1, image: 'https://imgur.com/0KFLnMD.jpg' },
];

// 👇 Función para formatear en COP
const formatCOP = (value) =>
    new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(value);

export default function Carrito() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const shippingCost = 15000; // 🚚 costo de envío en COP

    const { subtotal, total } = useMemo(() => {
        const calculatedSubtotal = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        return {
            subtotal: calculatedSubtotal,
            total: calculatedSubtotal > 0 ? calculatedSubtotal + shippingCost : 0,
        };
    }, [cartItems]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeItem(id);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };
    
    const handleCheckout = () => {
        if (cartItems.length > 0) {
            alert(`Procesando pago por un total de ${formatCOP(total)}. ¡Gracias por tu compra!`);
        } else {
            alert("Tu carrito está vacío.");
        }
    };

    return (
        <div className="main-page-container">
            <Nav />
            <div className="carrito-page-container">
                <h1 className="section-title">Tu Carrito de Compras</h1>

                {cartItems.length === 0 ? (
                    <div className="empty-cart-message">
                        <p>Tu carrito está vacío. </p>
                        <Link to="/" className="buy-button">Volver a la Tienda</Link>
                    </div>
                ) : (
                    <div className="cart-content-wrapper">
                        
                        <div className="cart-items-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item-card">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>Precio Unitario: <strong>{formatCOP(item.price)}</strong></p>
                                    </div>
                                    <div className="item-controls">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                                            className="quantity-input"
                                        />
                                        <button onClick={() => removeItem(item.id)} className="remove-button">
                                            Eliminar
                                        </button>
                                    </div>
                                    <h4 className="item-total">{formatCOP(item.price * item.quantity)}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h2>Resumen del Pedido</h2>
                            <div className="summary-row">
                                <span>Subtotal:</span>
                                <span>{formatCOP(subtotal)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Envío:</span>
                                <span>{formatCOP(shippingCost)}</span>
                            </div>
                            <div className="summary-row summary-total">
                                <strong>Total:</strong>
                                <strong>{formatCOP(total)}</strong>
                            </div>
                            <button onClick={handleCheckout} className="buy-button checkout-button">
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            <footer className="footer-main"><p>© 2023 MaxDep Sport. Carrito.</p></footer>
        </div>
    );
}
