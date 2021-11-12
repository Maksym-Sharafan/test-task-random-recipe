import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/favorites/favorites-selectors';
import favoritesActions from '../../redux/favorites/favorites-actions';
import styles from './FormAddCustomMeals.module.css';

export default function FormAddCustomMeals({ toggleModal }) {
    const [strInstructions, setDescription] = useState('');
    const [strMeal, setTitle] = useState('');
    const recipes = useSelector(getItems);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const coincidence = recipes.find(item => item.strMeal === strMeal);
        if (coincidence) {
            alert(`${strMeal} is already in contacts`);
            return;
        }

        const strMealThumb = 'https://via.placeholder.com/350x350';

        dispatch(favoritesActions.addFavorite(strMealThumb, strMeal, strInstructions));

        setTitle('');
        setDescription('');
        toggleModal();
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                onChange={handleChange}
                value={strMeal}
                placeholder="Dish title"
                type="text"
                name="title"
                className={styles.input} />
            <textarea
                onChange={handleChange}
                value={strInstructions}
                name="description"
                rows="6"
                cols="40"
                className={styles.textarea}
                placeholder="Dish description" />

            <button className={styles.buttonAddDish} >Add custom dish</button>
        </form>
    )
}