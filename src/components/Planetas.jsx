import React from 'react';
import './Planetas.css';
import { usePlaneta } from '../context/PlanetaContext';

// Importe imagens
import mercurioImg from '../images/planetas/mercurio.png';
import venusImg from '../images/planetas/venus.png';
import terraImg from '../images/planetas/terra.png';
import marteImg from '../images/planetas/marte.png';
import jupiterImg from '../images/planetas/jupiter.png';
import saturnoImg from '../images/planetas/saturno.png';
import uranoImg from '../images/planetas/urano.png';
import netunoImg from '../images/planetas/netuno.png';
import plutaoImg from '../images/planetas/plutao.png';

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

const Planetas = () => {
    const { selecionado, setSelecionado } = usePlaneta();

    const planetaDetalhado = planetasData.find(p => p.nome === selecionado?.nome);

    return (
        <div className="planetas-footer">
            <div className="planetas-horizontal-scroll">
                {planetasData.map((planeta, index) => (
                    <div
                        className="planeta-footer-item"
                        key={index}
                        id={planeta.nome.toLowerCase()}
                        onClick={() => setSelecionado(planeta)}
                    >
                        <img src={planeta.imagem} alt={planeta.nome} className="planeta-footer-img" />
                        <div className="planeta-footer-tooltip">
                            <h4>{planeta.nome}</h4>
                            <p>{planeta.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>

           {planetaDetalhado && planetaDetalhado.nome !== 'Plutão' && (
    <div className="planeta-destaque">
        <img src={planetaDetalhado.imagem} alt={planetaDetalhado.nome} className="planeta-destaque-img" />
        <div className="planeta-destaque-info">
            <h2>{planetaDetalhado.nome}</h2>
            <p>{planetaDetalhado.descricao}</p>
            <button onClick={() => setSelecionado(null)}>Fechar</button>
        </div>
    </div>
)}

        </div>
    );
};

export default Planetas;
