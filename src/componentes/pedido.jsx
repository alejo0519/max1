import React, { useState } from 'react';
import { FaBox, FaEnvelope, FaMapMarkedAlt, FaTruck } from "react-icons/fa";
import Nav from "./Nav"; 
import './styles/registro.css'; 
import './styles/inicio.css'; 

export default function Pedido() {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [orderInfo, setOrderInfo] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();

        if (orderId.length > 5 && email.includes('@')) {
            setOrderInfo({
                status: 'En tránsito',
                estimatedDelivery: '3 - 5 días hábiles',
                currentStep: 'Centro de Distribución, Ciudad de React',
                details: `Pedido #${orderId}`,
            });
        } else {
            setOrderInfo({
                status: 'Error',
                message: 'Por favor, ingresa un número de pedido válido y el correo de compra registrado.',
            });
        }
    };

    return (
        <div className="main-page-container">
            <Nav />

            <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "40px" }}>
                <div style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "30px",
                    maxWidth: "600px",
                    width: "100%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}>
                    <h2 className="section-title" style={{ textAlign: "center", marginBottom: "20px" }}>
                        <FaBox style={{ marginRight: "10px" }} /> Información del Pedido
                    </h2>
                    
                    <form onSubmit={handleSearch} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <div>
                            <label htmlFor="orderId">Número de Pedido</label>
                            <input 
                                type="text" 
                                id="orderId" 
                                placeholder="Ej: MXDP123456789" 
                                required
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email">Correo de Compra</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="correo@ejemplo.com" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="buy-button" style={{ padding: "12px", fontSize: "1rem" }}>
                            <FaEnvelope style={{ marginRight: "8px" }}/> Ver Información
                        </button>
                    </form>

                    {orderInfo && (
                        <div 
                            style={{ 
                                marginTop: "25px", 
                                padding: "20px", 
                                borderRadius: "8px", 
                                background: orderInfo.message ? "#fdecea" : "#e8f9f0", 
                                color: orderInfo.message ? "#842029" : "#0f5132", 
                                border: orderInfo.message ? "1px solid #f5c2c7" : "1px solid #badbcc"
                            }}
                        >
                            {orderInfo.message ? (
                                <p>{orderInfo.message}</p>
                            ) : (
                                <>
                                    <h3 style={{ marginBottom: "10px" }}>{orderInfo.details}</h3>
                                    <p><FaTruck style={{ marginRight: "6px" }}/> Estado actual: <strong>{orderInfo.status}</strong></p>
                                    <p><FaMapMarkedAlt style={{ marginRight: "6px" }}/> Última ubicación registrada: {orderInfo.currentStep}</p>
                                    <p>Fecha estimada de entrega: <strong>{orderInfo.estimatedDelivery}</strong></p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <footer className="footer-main"><p>© 2023 MaxDep Sport. Información de Pedidos.</p></footer>
        </div>
    );
}
