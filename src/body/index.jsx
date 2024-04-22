import style from "./Body.module.css"
export default function Body() {
    return (
        <div className={style.container}>
            <span className={style.containerImg}>
                <img src="./portada.jpg" alt="portada" />
            </span>
            <span className={style.containerInfo}>
                <h3>
                    Descubre la Excelencia Arquitectónica: Tu Visión, Nuestra Pasión
                </h3>
                <p>
                    Bienvenido a nuestra firma de arquitectura, donde convertimos tus sueños en estructuras tangibles que inspiran y perduran.
                    En nuestro estudio, cada proyecto es una oportunidad para crear espacios innovadores y funcionales que reflejen la visión
                    única de nuestros clientes.
                </p>
            </span>
        </div>
    )
}