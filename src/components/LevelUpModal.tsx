import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/levelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Congratulations!</strong>
                <p>You've reached a new level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}