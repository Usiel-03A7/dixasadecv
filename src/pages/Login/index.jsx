import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            // También puedes redirigir al usuario a otra página después de iniciar sesión
        }
    };

    return (
        <div className={styles['login-container']}>
            <h2 className={styles['login-title']}>Iniciar Sesión</h2>
            {error && <p className={styles['login-error']}>{error}</p>}
            <input
                className={styles['login-input']}
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                className={styles['login-input']}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className={styles['login-button']} onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );

};

export default Login;
