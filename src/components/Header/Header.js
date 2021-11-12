import { useLocation } from 'react-router';
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

export default function Header({ toggleModal }) {
    const location = useLocation();
    const isFavorites = location.pathname === '/favorites';

    return (
        <>
            <header className={styles.header}>
                <div className="container" >
                    <nav className={styles.mainNav}>
                        <NavLink exact to='/' className={styles.mainNavLink} activeClassName={styles.active}>
                            Random dish
                        </NavLink>
                        <NavLink exact to='/favorites' className={styles.mainNavLink} activeClassName={styles.active}>
                            Favorites
                        </NavLink>
                    </nav>
                    {isFavorites &&
                        <button onClick={toggleModal} className={styles.buttonAddDish} >Add custom dish</button>}
                </div>
            </header>

        </>
    );
};