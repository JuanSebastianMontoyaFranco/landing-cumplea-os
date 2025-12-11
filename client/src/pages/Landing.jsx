import React, { useState, useEffect } from "react";
import { Col, Row, Container } from '@themesberg/react-bootstrap';

//song
import song from '../assets/audio/audio.mp3';
//Section 1
import front from '../assets/img/section1/portada.jpg';

//Section 2
import separator1 from '../assets/img/section2/separador2.png';
import separator2 from '../assets/img/section2/separador1.png';
import backgroundSection2 from '../assets/img/section2/background.jpg';
//Section 3
import collage from '../assets/img/section3/collage.jpg';
//Section 4
import guest from '../assets/img/section4/person-icon.png';
import assistance from '../assets/img/section4/asistance.png';
import reception from '../assets/img/section4/reception.png';
import guestTitle from '../assets/img/section4/title-persons.png';
import assistanceTitle from '../assets/img/section4//title-assistance.png';
import receptionTitle from '../assets/img/section4/title-reception.png';
import backgroundSection4 from '../assets/img/section4/background.jpg';
import separatorSection4 from '../assets/img/section4/separator.png';
import smileTitle from '../assets/img/section4/title_smile.png';

//Section 5
import persons from '../assets/img/section5/person.png';
import card from '../assets/img/section5/card.png';
import icon1 from '../assets/img/section5/icon1.png';
import icon2 from '../assets/img/section5/icon2.png';
import icon3 from '../assets/img/section5/icon3.png';
import icon4 from '../assets/img/section5/icon4.png';
import backgroundSection5 from '../assets/img/section5/background.jpg';
import formal from '../assets/img/section5/formal.png';

//Section 6
import timeLine from '../assets/img/section6/time-line.png';
import decoration1 from '../assets/img/section6/decoration1.png';
import decoration2 from '../assets/img/section6/decoration2.png';
import see from '../assets/img/section6/see.png';

// Footer
import logoFooter from '../assets/img/footer/icon.png';
import fifty from '../assets/img/footer/fifty.png';
import './style.css'

const Landing = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestsNumber = urlParams.get('invitados') || '0'; // Si no hay número de invitados, poner 0 por defecto
    const eventDate = new Date("2025-02-22T00:00:00");

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const timeDifference = eventDate - now;

            if (timeDifference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        calculateTimeLeft(); // Calcular inmediatamente al montar el componente

        const interval = setInterval(calculateTimeLeft, 1000); // Actualiza cada segundo

        return () => clearInterval(interval); // Limpieza del intervalo
    }, [eventDate]);

    return (
        <>
            <section className="banner">
                <img src={front} alt="Banner image" className="img-fluid banner-image" />
            </section>

            <section className="audio-widget text-center mb-2 mt-2">
                <audio controls style={{ width: '80%' }}>
                    <source src={song} type="audio/mp3" />
                    Tu navegador no soporta el elemento de audio.
                </audio>
            </section>

            <section
                className="text-center"
                style={{
                    backgroundImage: `url(${backgroundSection2})`, // Fondo con imagen
                    backgroundSize: 'cover', // Asegura que la imagen cubra toda el área
                    backgroundPosition: 'center', // Centra la imagen
                    padding: '20px',
                }}
            >
                <img src={separator2} alt="Separador superior" />

                <p className="text-dark letter bold">
                    Quiero dar gracias a Dios por permitirme cumplir este sueño tan especial: llegar a mis 15
                    años rodeada de amor y bendiciones. Este momento único en mi vida no estaría completo
                    sin compartirlo con mi familia y las personas que más quiero.
                </p>
                <p className="text-dark letter bold">
                    Por eso, con mucha emoción, quiero invitarlos a mi fiesta de 15 años para celebrar juntos
                    este día tan especial. Será una noche inolvidable llena de alegría y diversión, y me encantaría
                    contar con su presencia para hacerla aún más mágica.
                </p>
                <p className="text-dark letter bold">
                    ¡Los espero!

                </p>
                <img style={{ paddingBottom: '120px' }} src={separator1} alt="Separador superior" />

            </section>

            <section className="banner mb-5">
                <img src={collage} alt="Banner image" className="img-fluid banner-image" />
            </section>

            <div
                className="section pt-0"
                style={{
                    backgroundImage: `url(${backgroundSection4})`, // Fondo con imagen
                    backgroundSize: 'cover', // Asegura que la imagen cubra toda el área
                    backgroundPosition: 'center', // Centra la imagen
                    padding: '20px',
                }}
            >
                <Container>
                    <Row>
                        <img
                            style={{
                                width: '100%', // Cambiar tamaño de la imagen
                                maxWidth: '600px', // Tamaño máximo de la imagen
                                margin: '0 auto', // Centrar la imagen y añadir margen inferior
                                display: 'block',
                                borderRadius: '10px',
                            }}
                            src={smileTitle}
                            alt="Banner image"
                            className="img-fluid banner-image"
                        />
                    </Row>
                    <row>
                        <img src={separatorSection4} alt="Separador superior" />
                    </row>

                    <Row className="justify-content-center">
                        <Col xs={12} className="text-center">
                            <div className="icon icon-shape icon-lg border-light">
                                <img
                                    src={guest}
                                    alt="Descripción 1"
                                />
                            </div>
                            <div className="guests-counter">
                                <img
                                    src={guestTitle}
                                    alt="Descripción 1"
                                    className="guests-counter__art"
                                />
                                <div className="guests-counter__value letter">
                                    {guestsNumber}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5 mt-lg-6">
                        <Col xs={6} md={3} className="text-center mb-4 d-flex flex-column align-items-center">
                            <div className="icon icon-shape icon-lg border-light rounded-circle">
                                <img
                                    src={reception}
                                    alt="Descripción 2"
                                    className="img-fluid rounded-circle"
                                />
                            </div>
                            <img
                                src={receptionTitle}
                                alt="Imagen adicional debajo del icono 1"
                                className="img-fluid mb-4"
                            />
                            <div className=" flex-grow-1 d-flex flex-column align-items-center">
                                <p className="text-secondary letter bold">Eventos Ipus</p>
                                <p className="text-secondary letter bold">Pance</p>
                                <p className="text-secondary letter bold">Cll 16b#127-90</p>
                                <div className="mt-auto">
                                    <a
                                        href="https://www.google.com/maps/place/Hacienda+Ipus/@3.331207,-76.5341245,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a6a26053027b:0x6be5ab881871c251!8m2!3d3.331207!4d-76.5341245!16s%2Fg%2F1pzrklfxw?hl=es&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D" // Enlace a Google Maps
                                        target="_blank" // Abre el enlace en una nueva pestaña
                                        rel="noopener noreferrer" // Seguridad al abrir el enlace
                                    >
                                        <button style={{ fontFamily: "'Ibarra Real Nova', serif" }} className="btn btn-primary">Ver mapa</button>
                                    </a>

                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className="text-center mb-4 d-flex flex-column align-items-center">
                            <div className="icon icon-shape icon-lg border-light rounded-circle">
                                <img
                                    src={assistance}
                                    alt="Descripción 3"
                                    className="img-fluid rounded-circle"
                                />
                            </div>
                            <img
                                src={assistanceTitle}
                                alt="Imagen adicional debajo del icono 2"
                                className="img-fluid mb-4"
                            />
                            <div className=" flex-grow-1 d-flex flex-column align-items-center">
                                <p style={{ paddingTop: '20px' }} className="text-secondary letter bold">
                                    Es importante para
                                    mi saber si contaré
                                    con tu presencia
                                </p>
                                <div className="mt-auto">
                                    <a href="https://forms.gle/TywkskaRuspAAhQN6">
                                        <button style={{ fontFamily: "'Ibarra Real Nova', serif" }} className="btn btn-primary">Confirmar aquí</button>
                                    </a>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <section
                className="banner mb-5"
                style={{
                    backgroundImage: `url(${backgroundSection5})`, // Fondo con imagen
                    backgroundSize: 'cover', // Asegura que la imagen cubra toda el área
                    backgroundPosition: 'center', // Centra la imagen
                    padding: '20px',
                }}
            >
                {/* Título con íconos */}
                <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            style={{ width: '50px', height: 'auto', marginRight: '10px' }}
                            src={icon3}
                            alt="Icon"
                            className="small-icon"
                        />
                        <h1 style={{ fontSize: '50px' }} className="mb-0 letter">DRESS CODE</h1>
                        <img
                            style={{ width: '50px', height: 'auto', marginLeft: '10px' }}
                            src={icon4}
                            alt="Icon"
                            className="small-icon"
                        />
                    </div>
                </div>

                {/* Imagen principal debajo del título */}
                <img
                    style={{
                        width: '80%', // Cambiar tamaño de la imagen
                        maxWidth: '300px', // Tamaño máximo de la imagen
                        margin: '0 auto 15px', // Centrar la imagen y añadir margen inferior
                        display: 'block',
                        borderRadius: '10px',
                    }}
                    src={persons}
                    alt="Banner image"
                    className="img-fluid banner-image"
                />

                <img
                    style={{
                        width: '80%', // Cambiar tamaño de la imagen
                        maxWidth: '300px', // Tamaño máximo de la imagen
                        margin: '0 auto 15px', // Centrar la imagen y añadir margen inferior
                        display: 'block',
                        borderRadius: '10px',
                    }}
                    src={formal}
                    alt="Banner image"
                    className="img-fluid banner-image"
                />

                <h4 className="text-center letter">Nos reservamos el color morado y lila.</h4>

                {/* Cuadro morado con contenido */}
                <div
                    style={{
                        backgroundColor: '#6a1b9a',
                        borderRadius: '70px 70px 10px 10px',
                        padding: '20px',
                        margin: '30px auto',
                        maxWidth: '500px',
                        textAlign: 'center',
                        position: 'relative',
                    }}
                >
                    {/* Imagen dentro del cuadro */}
                    <img
                        src={card}
                        alt="Imagen dentro del sobre"
                        style={{
                            width: '40%', // Cambiar tamaño de la imagen
                            maxWidth: '300px', // Tamaño máximo de la imagen
                            margin: '0 auto 15px', // Centrar la imagen y añadir margen inferior
                            display: 'block',
                            borderRadius: '10px',
                        }}
                    />

                    {/* Título e íconos a cada lado */}
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: '10px' }}>
                        <img
                            src={icon1}
                            alt="Icono 1"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                            }}
                        />
                        <h5 className="text-white mb-0 letter" style={{ textAlign: 'center', margin: '0', fontSize: '30px' }}>
                            LLUVIA DE SOBRES
                        </h5>
                        <img
                            src={icon2}
                            alt="Icono 2"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                </div>
            </section>

            <section className="banner mb-5">
                <div className="text-center">
                    <img src={decoration1} alt="Separador superior" />
                    <h2 className="letter">LÍNEA DE TIEMPO</h2>
                    <img src={decoration2} alt="Separador superior" />
                </div>
                <img src={timeLine} alt="Banner image" className="img-fluid banner-image" />
            </section>

            <img
                style={{
                    width: '70%', // Cambiar tamaño de la imagen
                    maxWidth: '200px', // Tamaño máximo de la imagen
                    margin: '0 auto 15px', // Centrar la imagen y añadir margen inferior
                    display: 'block',
                    borderRadius: '10px',
                }}
                src={see}
                alt="Banner image"
                className="img-fluid banner-image"
            />

            <section className="countdown-section">
                <div className="timer-wrapper">

                    <div className="timer-container">
                        <div>
                            <div className="time-box letter" id="days">{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</div>
                        </div>
                        <div>
                            <div className="time-box letter" id="hours">{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</div>
                        </div>
                        <div>
                            <div className="time-box letter" id="minutes">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="labels-container">
                        <span className="time-label letter">Días</span>
                        <span className="time-label letter">Horas</span>
                        <span className="time-label letter">Minutos</span>
                    </div>
                </div>
            </section>


            <footer className="footer py-3 bg-dark text-white">
                <Container>

                    <Row>
                        <Col className="mb-md-2">
                            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                                <p className="font-weight-normal font-small mb-0 letter">
                                    <img
                                        style={{ width: '80px', height: 'auto', marginLeft: '10px' }}
                                        src={fifty}></img>
                                    <img
                                        style={{ width: '40px', height: 'auto', marginRight: '10px' }}
                                        src={logoFooter}></img>
                                    Luisa Oriana Osorio Vanegas.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>
    );
};

export default Landing;
