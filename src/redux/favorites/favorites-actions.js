import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const addFavorite = createAction('favorites/add', (strMealThumb, strMeal, strInstructions) => ({
    payload: {
        id: v4(),
        strMealThumb,
        strMeal,
        strInstructions
    },
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default { addFavorite };