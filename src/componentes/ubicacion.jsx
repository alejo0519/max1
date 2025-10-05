import React from 'react';
import Nav from "./Nav"; 
import './styles/inicio.css'; 

export default function Ubicacion() {
    return (
        <div>
            <Nav />
            <section style={{ padding: '80px 5%', minHeight: '80vh' }}>
                <h2 className="section-title">Nuestras Tiendas Físicas</h2>
                
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                        Encuentra la sucursal de MaxDep más cercana a ti. ¡Te esperamos!
                    </p>
                    
                    
                    <div style={{ marginBottom: '30px' }}>
                        <img 
                            src="https://imgur.com/PUuMpGi.jpg" 
                            alt="Ubicación de la tienda MaxDep" 
                            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }}
                        />
                    </div>

                    <p><strong>Tienda Principal:</strong> C/ Deportiva, 45. Ciudad de React.</p>
                    <p><strong>Contacto:</strong> (555) 123-4567</p>
                </div>
            </section>
            <footer className="footer-main"><p>© 2023 MaxDep Sport. Ubicación.</p></footer>
        </div>
    );
}
