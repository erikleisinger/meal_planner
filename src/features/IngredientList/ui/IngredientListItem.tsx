import type { Ingredient } from '@/entities/Ingredient'
import useIngredients from '@/shared/ingredients/useIngredients'
import getIngredientUnit from '@/shared/ingredients/getIngredientUnit'
export default function IngredientListItem({ children, ingredient, removeItem }: { children: React.ReactNode; ingredient: Ingredient, removeItem?: (ingredient: Ingredient) => void }) {
    const ingredients = useIngredients()
    const thisIngredient = ingredients.find(i => {
        return i.id === ingredient.ingredient_id
    }) || ingredient;
    return (
        <>
            {

                thisIngredient && <li className="flex justify-space-between items-center gap-8 p-2 even:bg-slate-50 flex justify-between">
                    <div>
                        <div>
                            {thisIngredient.name}
                        </div>
                        <div className=" text-slate-800 text-sm">
                            {ingredient.amount} {ingredient.unit || getIngredientUnit(thisIngredient.unit)}
                        </div>
                    </div>
                    {
                        removeItem && <button onClick={() => removeItem(thisIngredient)} className="text-red-500 hover:bg-red-50 px-2 rounded-md">Delete</button>
                    }

                    {children}
                </li>
            }
        </>
    )
}