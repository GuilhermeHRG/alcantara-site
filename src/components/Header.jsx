import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import logo from '../images/Logo.png';
import { usePlaneta } from '../context/PlanetaContext';


// Imagens dos planetas
import mercurioImg from '../images/planetas/mercurio.png';
import venusImg from '../images/planetas/venus.png';
import terraImg from '../images/planetas/terra.png';
import marteImg from '../images/planetas/marte.png';
import jupiterImg from '../images/planetas/jupiter.png';
import saturnoImg from '../images/planetas/saturno.png';
import uranoImg from '../images/planetas/urano.png';
import netunoImg from '../images/planetas/netuno.png';
import plutaoImg from '../images/planetas/plutao.png';

function Header() {
    const { setSelecionado } = usePlaneta();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const planetasData = [
        { nome: "Mercúrio", imagem: mercurioImg, descricao: "Planeta mais próximo do Sol" },
        { nome: "Vênus", imagem: venusImg, descricao: "Irmão gêmeo da Terra em tamanho" },
        { nome: "Terra", imagem: terraImg, descricao: "Nosso lar cósmico" },
        { nome: "Marte", imagem: marteImg, descricao: "Alvo principal da colonização" },
        { nome: "Júpiter", imagem: jupiterImg, descricao: "Gigante protetor da Terra" },
        { nome: "Saturno", imagem: saturnoImg, descricao: "Rei dos anéis" },
        { nome: "Urano", imagem: uranoImg, descricao: "Rola em seu lado no espaço" },
        { nome: "Netuno", imagem: netunoImg, descricao: "Planeta mais ventoso" },
        { nome: "Plutão", imagem: plutaoImg, descricao: "Coração do Cinturão de Kuiper" }
    ];

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handlePlanetClick = (nome) => {
        const planeta = planetasData.find(p => p.nome === nome);
        if (planeta) {
            setSelecionado(planeta);
            setShowDropdown(false);
        }
    };

    // Fecha o dropdown se clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo do Jogo" className="logo-image" />
            </div>

            <nav className="nav-menu">
                <button className="nav-button">Home</button>

                <a
                    className="nav-button"
                    href="/downloads/JogoPlanetas.zip"
                    download
                >
                    Download
                </a>

<div className={`dropdown ${showDropdown ? 'open' : ''}`} ref={dropdownRef}>
                    <button className="nav-button" onClick={toggleDropdown}>
                        Planetas
                    </button>

                    {showDropdown && (
                        <div className="dropdown-content">
                            {planetasData.map(({ nome }) => (
                                <a key={nome} href="#!" onClick={() => handlePlanetClick(nome)}>
                                    {nome}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
