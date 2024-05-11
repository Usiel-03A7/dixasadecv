import { useState } from 'react';
import styles from './Login.module.css';


const Login = () => {
    const email = 'mayramoreno@dixa.com';
    const password = 'D1x4s4d3c7';
    const [error, setError] = useState(null);


    const handleLogin = () => {

        if (!email || !password) {
            setError('Por favor, completa todos los campos.');
        } else {
            setError(null);
            console.log('Email:', email);
            console.log('Password:', password);
            window.location.href = '/admin';
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
