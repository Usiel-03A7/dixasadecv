import style from "./aboutUs.module.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutUs() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }


    return (
        <div className={style.container} >
            <span className={style.containerTitle}>
                <h1>Dixa diseño y construcción</h1>
            </span>
            <span className={style.containerPar}>
                <p>Somos una empresa que se dedica apasionadamente a convertir tus sueños en realidad.
                    Nos comprometemos con el diseño innovador y la ejecución impecable en cada proyecto de construcción.
                    Desde residencias privadas hasta espacios comerciales, en Dixa nos enorgullece ofrecer soluciones a medida que
                    superan las expectativas de nuestros clientes.</p>
            </span>


            <Slider className={style.containerCarrousel} {...settings}>
                <span className={style.containerCarrouselImg}>
                    <img src="./ProyectoCocina.jpg" alt="proyecto cocina" />
                </span>
                <span className={style.containerCarrouselImg}>
                    <img src="./ProyectoTest1.jpg" alt="proyecto cocina" />
                </span>
                <span className={style.containerCarrouselImg}>
                    <img src="./ProyectoTest2.jpg" alt="proyecto cocina" />
                </span>
            </Slider>

            <span className={style.containerParraphs}>
                <p>Nuestro equipo está compuesto por expertos en arquitectura, diseño interior y construcción, todos comprometidos con la calidad
                    y la atención al detalle. Cada proyecto es una oportunidad para crear algo único, reflejando la visión y el estilo de nuestros
                    clientes.</p>
                <p>Nos esforzamos por establecer relaciones sólidas con nuestros clientes, basadas en la transparencia, la comunicación abierta y el
                    trabajo en equipo. Entendemos que la construcción de un hogar o un espacio comercial es más que un proyecto; es una inversión en el
                    futuro, y nos comprometemos a garantizar que cada paso del proceso sea tan gratificante como el resultado final.</p>
                <p>En Dixa, no solo construimos estructuras, creamos experiencias. Estamos aquí para inspirarte, guiarte y hacer realidad tus proyectos
                    más ambiciosos. Únete a nosotros en este emocionante viaje hacia el diseño y la construcción de clase mundial.</p>
            </span>
            <span className={style.containerMyV}>
                <span className={style.containerMission}>
                    <h2>Mision</h2>
                    <p>Nuestra misión en Dixa es crear espacios arquitectónicos excepcionales que reflejen la personalidad y
                        las necesidades de nuestros clientes. Nos comprometemos a ofrecer soluciones de diseño innovadoras, funcionales y
                        estéticamente atractivas, utilizando materiales de alta calidad y prácticas de construcción sostenibles. Buscamos establecer
                        relaciones sólidas con nuestros clientes, basadas en la confianza, la transparencia y la colaboración, y nos esforzamos por superar
                        sus expectativas en cada proyecto que emprendemos</p>
                </span>
                <span className={style.containerVision}>
                    <h2>Vision</h2>
                    <p>En Dixa, aspiramos a ser líderes en el campo de la arquitectura y la construcción, reconocidos por nuestra innovación, creatividad y
                        compromiso con la excelencia. Nos esforzamos por transformar el panorama urbano con diseños inspiradores y sostenibles que mejoren la calidad
                        de vida de las personas y contribuyan al desarrollo de comunidades vibrantes y prósperas</p>
                </span>
            </span>

        </div >
    )
}