import useIngredients from "@/shared/ingredients/useIngredients"
import type {Ingredient} from '@/entities/Ingredient'

export default function SelectIngredient() {
    const ingredients = useIngredients()

    function IngredientOption({ingredient}: {ingredient: Ingredient}) {
        return (
            <option value={ingredient.name}>{ingredient.name}</option>
        )
    }

    function IngredientOptions({ingredients}: {ingredients: Ingredient[]}) {
        return (
            ingredients.map((ingredient, i) => (
                <IngredientOption ingredient={ingredient} key={i} />
            ))
        )
    }
    return (
        <>
        <select name="ingredient" id="ingredient-select">
        {IngredientOptions({ingredients})}
        </select>
        </>
    )
}