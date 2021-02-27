import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown} = useContext(CountdownContext);
    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); //depois de converter os minutos para string, padStart verifica se tem dois caracteres, se não tiver, ele coloca um 0 primeiro, e se tiver, o split divide eles em dois arrays separados.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                 <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    ) }
                </>
            )}

                    
        </div>
    );
}