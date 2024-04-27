import style from "./footer.module.css"
export default function Footer() {
    return (
        <div className={style.container}>
            <span className={style.containerSocial}>
                <a href="https://www.facebook.com/profile.php?id=100069871142641&mibextid=ZbWKwL" target="_blanck" > Facebook</a>
                <a href="https://www.instagram.com/dixa.dc?igsh=MWFkNGhqbjdlbWU4Yg==" target="_blanck" > instagram</a>
            </span>

        </div>
    )
}
