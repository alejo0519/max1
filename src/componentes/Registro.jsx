import React, { useState } from 'react';
import Nav from "./Nav"; 
import './styles/registro.css'; 
import './styles/inicio.css'; 

const Registro = () => {
    const [isRegistering, setIsRegistering] = useState(true); 
    

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (isRegistering) {
            
            console.log("Datos de Registro:", { nombre, correo, telefono, password });
            alert('¡Registro exitoso');
        } else {
           
            console.log("Datos de Login:", { correo, password });
            alert('inicio de sesion exitoso ');
        }
        
  
        setNombre(''); setCorreo(''); setTelefono(''); setPassword('');
    };

    const handleToggle = () => {
        setIsRegistering(prev => !prev);
    }

    return (
        <div className="main-page-container">
            <Nav />
            <div className="registro-container">
                <div className="registro-form-wrapper">
                    <h1>{isRegistering ? 'Crear Cuenta (Registro)' : 'Iniciar Sesión'}</h1>
                    
                    <form onSubmit={handleFormSubmit}>
                        
                        {/* Campos solo para REGISTRO */}
                        {isRegistering && (
                            <>
                                <label htmlFor='Nom'>Nombre</label>
                                <input 
                                    type="text" 
                                    id="Nom" 
                                    placeholder="Tu Nombre Completo" 
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                                <label htmlFor='Tel'>Teléfono</label>
                                <input 
                                    type="text" 
                                    id="Tel" 
                                    placeholder="Número de contacto (Opcional)"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </>
                        )}
                        
                        
                        <label htmlFor='Cor'>Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="Cor" 
                            placeholder="tucorreo@ejemplo.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required 
                        />
                        
                        <label htmlFor='Pass'>Contraseña</label>
                        <input 
                            type="password" 
                            id="Pass" 
                            placeholder="Mínimo 8 caracteres" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        
                        <button type="submit">
                            {isRegistering ? 'Registrarse' : 'Acceder'}
                        </button>
                    </form>

                 
                    <div className="form-toggle">
                        <p>
                            {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
                            <span onClick={handleToggle} className="toggle-link">
                                {isRegistering ? ' Inicia Sesión aquí' : ' Regístrate aquí'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="footer-main"><p>© 2023 MaxDep Sport. Acceso.</p></footer>
        </div>
    )
}

export default Registro;