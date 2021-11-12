import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import favoritesActions from '../../redux/favorites/favorites-actions';
import { getItems } from '../../redux/favorites/favorites-selectors'

import RecipeCard from "../RecipeCard/RecipeCard";
import fetchRandomRecipe from "../../services/fetchAPI";

import styles from './HomePage.module.css'


export default function HomePage() {
    const [recipe, setRecipe] = useState([]);
    const [skip, setSkip] = useState(0);
    const items = useSelector(getItems);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRandomRecipe().then(data => {
            setRecipe(data)
        })
    }, [skip]);



    const addToFavoriteList = () => {
        const { strMealThumb, strMeal, strInstructions } = recipe;

        const coincidence = items.find(item => item.strMeal === strMeal);
        if (coincidence) {
            alert(`${strMeal} is already in favorites`);
            return;
        };

        dispatch(favoritesActions.addFavorite(strMealThumb, strMeal, strInstructions));
    };

    function skipRecipe() {
        setSkip(skip + 1)
    };


    return (
        <div className={styles.homeWrapper} >
            <div className={styles.mainContent}>
                <RecipeCard data={recipe} skip={skipRecipe} />
                <div>
                    <button className={styles.button} onClick={skipRecipe} >Skip</button>
                    <button className={styles.button} onClick={addToFavoriteList} >Like</button>
                </div>
            </div>
        </div>
    );
};