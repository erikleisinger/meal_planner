import type {Ingredient} from '@/entities/Ingredient'
import useIngredients from '@/shared/ingredients/useIngredients'
import getIngredientUnit from '@/shared/ingredients/getIngredientUnit'
export default function IngredientListItem({ingredient}: {ingredient: Ingredient}) {
    const ingredientLib = useIngredients()
    const thisIngredient = ingredientLib.find(i => i.id === ingredient.ingredient_id)
    return (
        <li className="flex justify-space-between gap-8">
            <div>
            {thisIngredient.name}
            </div>
            <div>
                {ingredient.amount}{getIngredientUnit(thisIngredient.unit)}
            </div>
          
        </li>
    )
}