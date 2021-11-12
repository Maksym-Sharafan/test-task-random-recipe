import axios from "axios"

const fetchRandomRecipe = async () => {
    try {
        const recipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        return recipe.data.meals[0]
    } catch (error) {
        console.log(error.message)
    }
}

export default fetchRandomRecipe