import { useState } from "react";
import style from "./contactUs.module.css";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullname: "",
        number: "",
        mail: "",
        subject: "",
        textArea: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const person = { ...formData };
        console.log(person);

        setFormData({
            fullname: '',
            number: '',
            mail: '',
            subject: '',
            textArea: ''
        });
    };

    return (
        <div className={style.container}>
            <span className={style.containerHistory}>
                <h2>Historia de DIXA</h2>
                <p>Dixa fue fundada en 2021 por las arquitectos Mayra Moreno y Yuliana Anguiano no se sus apellidos.
                    Su pasión por el diseño innovador y la construcción de alta calidad los llevó a establecer una empresa que se enfoca
                    en crear espacios arquitectónicos excepcionales que satisfacen las necesidades y deseos de sus clientes</p>
            </span>
            <span className={style.containerArchitecs}>
                <h2>Copropietarios</h2>
                <h3>ARQ. Yuliana Iselt Anguiano Arreola</h3>
                <h3>ARQ. Mayra Paola Moreno Jimenez</h3>
                <img src="./portada.jpg" alt="portada" />
            </span>

            <span className={style.containerFormMap}>
                <form className={style.containerFrom} onSubmit={handleSubmit}>
                    <h2>Mandanos tus dudas</h2>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre completo"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        placeholder="Ingresa tu Número"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        placeholder="Ingresa tu Correo"
                        name="mail"
                        value={formData.mail}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Ingresa el asunto"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                    <textarea
                        placeholder="Ingrese el mensaje a enviar"
                        name="textArea"
                        value={formData.textArea}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <span className={style.containerMap}>
                    <h2>Estamos aquí</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.38887581669294!2d-103.7353529709047!3d19.272709164800386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425452dae4398a1%3A0x4c345c95c502315a!2sPapeler%C3%ADa%20e%20impresiones%20ARQUI!5e0!3m2!1ses-419!2smx!4v1714843148771!5m2!1ses-419!2smx"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </span>
            </span>
        </div>
    );
}
