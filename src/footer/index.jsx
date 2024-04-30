import style from "./footer.module.css"
export default function Footer() {
    return (
        <div className={style.container}>
            <span className={style.containerSocial}>
                <h3>Siguenos en nuestras redes</h3>
                <a href="https://www.facebook.com/profile.php?id=100069871142641&mibextid=ZbWKwL" target="_blanck" > Facebook</a>
                <a href="https://www.instagram.com/dixa.dc?igsh=MWFkNGhqbjdlbWU4Yg==" target="_blanck" > instagram</a>
            </span>
            <span className={style.information} >
                <p>© 2021 DIXA diseño y construcción. Todos los derechos reservados.</p>
                <p className={style.informationP}> | Política de Privacidad | Términos y Condiciones | <a href="/Contactanos">Contáctanos</a></p>
            </span>

        </div>
    )
}
