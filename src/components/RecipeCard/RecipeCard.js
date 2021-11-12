
import styles from './RecipeCard.module.css';

export default function RecipeCard({ data }) {
    const { strMealThumb, strMeal, strInstructions } = data;

    return (
        <div className={styles.card}>
            <img src={strMealThumb || 'https://via.placeholder.com/350x350'} alt={strMeal} />
            <h2 className={styles.title}>{strMeal}</h2>
            <p className={styles.recipe}>{strInstructions}</p>
        </div>
    )
};