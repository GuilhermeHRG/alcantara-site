import React from 'react';
import './App.css';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import PlanetasFooter from './components/Planetas';

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Apresentacao />
                {/* Outras seções... */}
            </main>
            <footer className="footer">
                <PlanetasFooter />
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Alcântara - Jornada Cósmica
                </div>
            </footer>
        </div>
    );
}


export default App;