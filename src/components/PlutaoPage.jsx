import React from 'react';
import './PlutaoPage.css';

function PlutaoPage() {
    return (
        <section className="plutao-page">
            <div className="plutao-container">
                <h2>Explorando Plutão</h2>
                <p className="destaque-texto">
                    <span className="destaque">Explore Plutão e aprenda brincando!</span>
                </p>
                <p>
                    Plutão é um planeta anão bem longe no espaço! Em <strong>Alcantra: Aventura Espacial</strong>, 
                    você é um astronauta que pula, escala e coleta dados para descobrir os segredos de Plutão. 
                    Vamos aprender sobre gravidade, peso e outras forças enquanto nos divertimos!
                </p>

                <div className="destaque-principal">
                    <p>
                        No jogo, você vai sentir como é leve em Plutão, pular bem alto e deslizar em plataformas geladas. 
                        Cada planeta tem algo especial, e em Plutão, as forças da física tornam a aventura super legal!
                    </p>
                </div>

                <div className="conceitos">
                    <div className="concept-section">
                        <span>🌌</span>
                        <h3>Gravidade</h3>
                        <p>
                            Gravidade é como um abraço invisível que puxa as coisas para baixo. Na Terra, você cai rápido 
                            quando pula. Em Plutão, a gravidade é bem fraquinha, então você pula alto e cai devagar, 
                            como se estivesse flutuando!
                        </p>
                        <p>
                            No jogo, isso faz o astronauta pular bem alto para alcançar plataformas. Mas cuidado para 
                            pousar direitinho!
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>⚖️</span>
                        <h3>Peso</h3>
                        <p>
                            Peso é o quanto a gravidade te puxa. Na Terra, você se sente mais pesado. Em Plutão, a gravidade 
                            é fraca, então você parece bem leve, mesmo sendo a mesma pessoa!
                        </p>
                        <p>
                            No jogo, o astronauta pula mais fácil por ser leve, ajudando a chegar em lugares altos. 
                            Controle bem os pulos!
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>🧑‍🚀</span>
                        <h3>Massa</h3>
                        <p>
                            Massa é o quanto de "coisa" você tem no seu corpo. Não importa se está na Terra ou em Plutão, 
                            sua massa é sempre a mesma. Mas o peso muda por causa da gravidade!
                        </p>
                        <p>
                            No jogo, a massa do astronauta faz ele se mover de jeitos diferentes, como deslizar em 
                            plataformas ou balançar em cordas.
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>💪</span>
                        <h3>Tipos de Forças</h3>
                        <p>
                            Forças são como empurrões ou puxões que mexem as coisas. Tem forças que puxam (como a gravidade), 
                            empurram (como o chão) ou seguram (como uma corda).
                        </p>
                        <p>
                            No jogo, você sente a gravidade te puxando, o chão te segurando, cordas te ajudando a subir e 
                            plataformas geladas te fazendo deslizar. É muito divertido!
                        </p>
                    </div>

                    <div className="concept-section destaque-principal">
                        <h3>Forças da Mecânica</h3>
                        <p>
                            Forças da mecânica explicam como tudo se move, como o astronauta pula ou escala em Plutão. 
                            No jogo, você vai ver essas forças em plataformas, cordas e gêiseres que soltam gás. 
                            Vamos conhecer as principais!
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>⬇️</span>
                        <h3>Força Peso</h3>
                        <p>
                            Força peso é o que te puxa para baixo por causa da gravidade. Na Terra, ela te faz cair rápido. 
                            Em Plutão, ela é fraquinha, então você cai devagar, como uma pena.
                        </p>
                        <p>
                            No jogo, a força peso faz o astronauta descer após pular, mas bem devagar, dando tempo para 
                            escolher onde pousar.
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>🤝</span>
                        <h3>Força de Contato</h3>
                        <p>
                            Quando você toca algo, como o chão ou uma corda, acontece uma força de contato. Ela te segura 
                            (como o chão) ou te faz deslizar (como um escorregador).
                        </p>
                        <p>
                            No jogo, plataformas seguram o astronauta, mas as geladas são escorregadias e fazem ele deslizar. 
                            É difícil parar no lugar certo!
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>🛑</span>
                        <h3>Força Normal</h3>
                        <p>
                            Força normal é o chão te segurando quando você pisa. É como se a plataforma dissesse: "Fica aqui!" 
                            Ela te empurra para cima para não cair.
                        </p>
                        <p>
                            No jogo, as plataformas seguram o astronauta com essa força, deixando ele pronto para pular de novo.
                        </p>
                    </div>

                    <div className="concept-section">
                        <span>🪢</span>
                        <h3>Força de Tensão</h3>
                        <p>
                            Força de tensão é quando uma corda te puxa ou segura, como em um cabo de guerra. A corda fica 
                            esticada e te ajuda a não cair.
                        </p>
                        <p>
                            No jogo, o astronauta usa cordas para subir a lugares altos. A corda o segura firme para ele escalar!
                        </p>
                    </div>
                </div>

                <div className="jogo-destaques">
                    <h3>O Jogo: Alcantra - Missão Plutão</h3>
                    <p>
                        Em <strong>Alcantra: Aventura Espacial</strong>, você é um astronauta em Plutão! Sua missão é coletar 
                        <strong>20 disquetes</strong> com dados do planeta para ligar a nave e voltar para casa. Veja o que 
                        você vai fazer:
                    </p>
                    <div className="destaques-grid">
                        <div className="destaque-item">
                            <span>🚀</span>
                            <h4>Pular Alto</h4>
                            <p>
                                Use a barra de espaço para pular bem alto! A gravidade fraca de Plutão te faz voar, mas 
                                cuidado para cair na plataforma certa.
                            </p>
                        </div>
                        <div className="destaque-item">
                            <span>💾</span>
                            <h4>Coletar Disquetes</h4>
                            <p>
                                Pegue 20 disquetes brilhantes pelo planeta. Cada um te deixa mais perto de ligar a nave!
                            </p>
                        </div>
                        <div className="destaque-item">
                            <span>🪢</span>
                            <h4>Escalar Cordas</h4>
                            <p>
                                Pressione <strong>E</strong> para subir cordas e alcançar lugares altos. A corda te segura 
                                firme como um super-herói!
                            </p>
                        </div>
                        <div className="destaque-item">
                            <span>💨</span>
                            <h4>Cuidar do Oxigênio</h4>
                            <p>
                                Seu oxigênio acaba enquanto você corre. Encontre gêiseres que soltam gás para encher o tanque!
                            </p>
                        </div>
                        <div className="destaque-item">
                            <span>🧊</span>
                            <h4>Deslizar no Gelo</h4>
                            <p>
                                Algumas plataformas são escorregadias como gelo, fazendo você deslizar. Cuidado para não cair!
                            </p>
                        </div>
                        <div className="destaque-item">
                            <span>🪐</span>
                            <h4>Ligar a Nave</h4>
                            <p>
                                Após pegar todos os disquetes, vá até a nave e pressione <strong>E</strong>. Espere a 
                                contagem e decole!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="chamada-final">
                    <p>
                        Pronto para ser um astronauta em Plutão? Pule, escale e descubra os segredos do planeta enquanto 
                        aprende sobre forças! É uma aventura cheia de ciência e diversão!
                    </p>
                </div>

                
            </div>
        </section>
    );
}

export default PlutaoPage;