import style from "./Projects.module.css"
export default function Projects() {
    return (
        <div className={style.container}>
            <span className={style.containerProject}>
                <h3>Proyecto Comala</h3>
                <span className={style.containerImg}>
                    <img src="./ProyectoComala.jpg" alt="Pryecto" />
                    <p>El proyecto Comala es una residencia diseñada por DIXA, enfocada en integrar elementos modernos y
                        tradicionales para reflejar la riqueza cultural y natural del entorno. Destaca por su diseño que se fusiona
                        con el paisaje circundante, aprovechando vistas panorámicas y luz natural.
                        Ofrece ambientes versátiles diseñados para satisfacer las necesidades del cliente, empleando materiales naturales y
                        estrategias de iluminación para crear una atmósfera acogedora y serena.</p>
                </span>
            </span>
            <span className={style.containerProject}>
                <h3> Proyecto KIBO</h3>
                <span className={style.containerImg}>
                    <img src="./ProyectoTest6.jpg" alt="Pryecto kibo" />
                    <p>Un proyecto arquitectónico innovador que combina diseño contemporáneo y tecnología avanzada, enfocado en la sostenibilidad y la eficiencia
                        energética. KIBO ofrece espacios versátiles adaptados a las necesidades modernas, promoviendo la responsabilidad ambiental y mejorando la
                        calidad de vida de sus ocupantes.</p>
                </span>
            </span>
            <span className={style.containerProject}>
                <h3>Proyecto Cocina</h3>
                <span className={style.containerImg}>
                    <img src="./ProyectoCocina.jpg" alt="Pryecto" />
                    <p>El proyecto de cocina de DIXA es una propuesta arquitectónica innovadora que combina diseño contemporáneo con funcionalidad.
                        Destaca por su enfoque en materiales sostenibles y tecnología avanzada para promover la eficiencia energética. Con una
                        distribución inteligente del espacio, maximiza la utilidad y comodidad del usuario. Incorpora soluciones innovadoras que
                        simplifican las tareas diarias en la cocina. Este proyecto redefine el concepto tradicional de cocina, adaptándose a las
                        necesidades y estilo de vida contemporáneos, reflejando el compromiso de DIXA con la innovación y la calidad en cada
                        iniciativa.</p>
                </span>
            </span>

        </div>
    )
}