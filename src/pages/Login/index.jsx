import { useState } from 'react';
import styles from './Login.module.css';


const Login = () => {
    const email = 'mayramoreno@dixa.com';
    const password = 'D1x4s4d3c7';
    const [error, setError] = useState(null);

    const handleLogin = () => {
        // Aquí podrías agregar la lógica para autenticar al usuario
        // Por simplicidad, solo mostraremos un mensaje de error si los campos están vacíos
        if (!email || !password) {
            setError('Por favor, completa todos los campos.');
        } else {
            setError(null);
            // Aquí puedes realizar la autenticación o enviar los datos a tu servidor
            console.log('Email:', email);
            console.log('Password:', password);
            alert('El sistema te dice hola mi estimada ARQ: Mayra Moreno')
            // También puedes redirigir al usuario a otra página después de iniciar sesión
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles['login-container']}>
                <h2 className={styles['login-title']}>Iniciar Sesión</h2>
                {error && <p className={styles['login-error']}>{error}</p>}
                <input
                    className={styles['login-input']}
                    type="email"
                    placeholder="Correo electrónico"

                />
                <br />
                <input
                    className={styles['login-input']}
                    type="password"
                    placeholder="Contraseña"

                />
                <br />
                <button className={styles['login-button']} onClick={handleLogin}>Iniciar Sesión</button>
            </div>
        </div>
    );

};

export default Login;
