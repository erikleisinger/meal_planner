import type {Ingredient} from '@/entities/Ingredient'
import IngredientListItem from './IngredientListItem'
export default function IngredientList({ingredients}: {ingredients: Ingredient[]}) {

    return (
        <ul>
            {ingredients.map((ingredient, i) => {
                return (
                    <IngredientListItem ingredient={ingredient} key={i} />
                )
            })}
        </ul>
    )
}