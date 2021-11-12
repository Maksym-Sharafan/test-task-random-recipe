import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import FormAddCustomMeals from '../FormAddCustomMeals';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ toggleModal }) {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [toggleModal]);

    function handleKeyDown(e) {
        if (e.code === 'Escape') {
            toggleModal();
        }
    };

    function handleBackdropClick(e) {
        if (e.currentTarget === e.target) {
            toggleModal();
        }
    }

    return createPortal(
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <div className={styles.modal}>
                <h2 className={styles.modalTitle} >Add custom dish</h2>
                <FormAddCustomMeals toggleModal={toggleModal} />
            </div>
        </div>,
        modalRoot,
    );
}