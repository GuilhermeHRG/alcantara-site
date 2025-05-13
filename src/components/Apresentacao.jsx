import React from 'react';
import './Apresentacao.css';
import { usePlaneta } from '../context/PlanetaContext';
import PlutaoPage from './PlutaoPage';

const Apresentacao = () => {
    const { selecionado } = usePlaneta();

    if (selecionado?.nome === 'Plutão') {
        return <PlutaoPage />;
    }

    return (
        <section className="apresentacao">
            <div className="apresentacao-container">
                <h2>Alcântara: Uma Jornada Cósmica Educativa</h2>
                <p className="destaque-texto">
                    <span className="destaque">"Onde a aventura espacial encontra a aprendizagem!"</span>
                </p>
                <p>
                    Embarque em uma jornada única pelo sistema solar como um corajoso astronauta brasileiro e seu fiel mascote, 
                    um cachorro da raça Fila Brasileiro. Alcântara reinventa os jogos educacionais, combinando uma <strong>jogabilidade 
                    envolvente</strong> em estilo plataforma 2D com <strong>conceitos científicos precisos</strong> sobre cada planeta que você explora.
                </p>

                <div className="destaque-principal">
                    <p>
                        Diferente de outros jogos educativos, Alcântara prioriza <strong>primeiro a diversão</strong>, 
                        enquanto naturalmente introduz conceitos de Física como gravidade, massa e temperatura através 
                        da exploração de mundos com características únicas e desafios adaptados a cada ambiente planetário.
                    </p>
                </div>

                <div className="destaques">
                    <div className="destaque-item">
                        <span>🌎</span>
                        <h3>Missão Educativa</h3>
                        <p>Explore planetas com características científicas reais transformadas em mecânicas de jogo</p>
                    </div>
                    <div className="destaque-item">
                        <span>🎯</span>
                        <h3>Jogabilidade Refinada</h3>
                        <p>Controles precisos e desafios adaptados a cada ambiente planetário</p>
                    </div>
                    <div className="destaque-item">
                        <span>🧠</span>
                        <h3>Aprendizado Natural</h3>
                        <p>Conceitos físicos integrados organicamente à experiência de jogo</p>
                    </div>
                </div>

                <div className="chamada-final">
                    <p>
                        Ideal para professores que desejam apresentar conceitos científicos de forma <strong>lúdica e imersiva</strong>, 
                        Alcântara transforma a sala de aula em uma emocionante aventura interplanetária!
                    </p>
                    <button className="cta-button">Iniciar Exploração Cósmica</button>
                </div>
            </div>
        </section>
    );
};

export default Apresentacao;
