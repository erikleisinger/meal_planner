import type {Ingredient} from '@/entities/Ingredient'
import useIngredients from '@/shared/ingredients/useIngredients'
import getIngredientUnit from '@/shared/ingredients/getIngredientUnit'
export default function IngredientListItem({ingredient}: {ingredient: Ingredient}) {
    const ingredients = useIngredients()
    const thisIngredient = ingredients.find(i => {
        return i.id === ingredient.ingredient_id
    })
    return (
        <div>
        {
       
            thisIngredient &&  <li className="flex justify-space-between gap-8">
            <div>
            {thisIngredient.name}
            </div>
            <div className="text-right">
                {ingredient.amount} {getIngredientUnit(thisIngredient.unit)}
            </div>
          
        </li>
        }
        </div>
    )
}