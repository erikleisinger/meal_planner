import type {Ingredient} from '@/entities/Ingredient'
import IngredientListItem from './IngredientListItem'
export default function IngredientList({ingredients, removeItem}: {ingredients: Ingredient[], removeItem?: (ingredient: Ingredient) => void}) {

    return (
        <ul>
            {ingredients.map((ingredient, i) => {
                return (
                    <IngredientListItem ingredient={ingredient} key={i} removeItem={removeItem} />
                )
            })}
        </ul>
    )
}