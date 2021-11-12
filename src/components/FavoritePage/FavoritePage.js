import { useSelector } from 'react-redux';
import { getItems } from '../../redux/favorites/favorites-selectors';
import Modal from "../Modal";
import RecipeCard from "../RecipeCard";
import styles from './FavoritePage.module.css';


export default function FavoritePage({ toggleModal, showModal }) {
    const dataCard = useSelector(getItems)

    return (
        <div className="container">
            <div className={styles.favoriteWrapper}>
                {showModal && <Modal toggleModal={toggleModal} />}

                {(dataCard.length > 0) ? (<ul className={styles.favoriteListWrapper} >
                    {dataCard.map(item => {
                        return <li className={styles.favoriteItem} key={item.id}><RecipeCard data={item} /></li>
                    })}
                </ul>) : <h1>This page will contain your favorite recipes or those that you create yourself!</h1>}

            </div>
        </div>
    )
}