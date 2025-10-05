import { Typewriter } from "react-simple-typewriter";
import Nav from "./Nav";
import Carrusel from "./carrusel";
import { Link } from "react-router-dom"; 
import './styles/inicio.css';

const featuredProducts = [
    { 
        id: 't1', 
        name: 'Balon elitepro', 
        price: '90.000', 
        category: 'Accesorio', 
        image: 'https://i.imgur.com/awNpbm7.jpg'
    },
    { 
        id: 's2', 
        name: 'joma elite', 
        price: '290.000', 
        category: 'Ropa', 
        image: 'https://imgur.com/LAUQGgJ.jpg' 
    },
    { 
        id: 'a3', 
        name: 'max complex', 
        price: '180.000', 
        category: 'Ropa', 
        image: 'https://imgur.com/E9P5FrC.jpg' 
    },
];

const Inicio = () => (
    <div className="main-page-container">
        
        <Nav />

      
        <section className="hero-section">
            <h1 className="logo-text-hero">
                <Typewriter
                    words={['MaxDep']}
                    loop={1} 
                    cursor
                    cursorStyle='|'
                    typeSpeed={500}
                    deleteSpeed={500}
                    delaySpeed={1000}
                />
            </h1> 
            <h2 className="slogan-text">
                <Typewriter
                    words={['Entrena Fuerte', 'Viste la Pasión', 'Máximo Rendimiento']}
                    loop={Infinity}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </h2>
            
            <Carrusel />
        </section>

        <section className="featured-products-section">
            <h2 className="section-title">Nuevos Ingresos y Ofertas Exclusivas</h2>
            <div className="product-grid">
                {featuredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image"/>
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                        <Link to={`/${product.category.toLowerCase()}`}>
                            <button className="buy-button">Ver Detalles</button>
                        </Link>
                    </div>
                ))}
            </div>
            
        </section>

        {/* 3. FOOTER */}
        <footer className="footer-main">
            <p>Hecho con ❤️ | © 2023 MaxDep Sport</p>
        </footer>
    </div>
);

export default Inicio;