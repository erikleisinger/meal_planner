import { AddIngredient } from '@/features/AddIngredient'
import type { Ingredient } from '@/entities/Ingredient'
import usePantryItems from '../lib/usePantryItems'
import { addIngredientToPantry } from "@/shared/pantry/addIngredientToPantry"
import { IngredientList } from '@/features/IngredientList'
import { useDeletePantryItem } from '../lib/useDeletePantryItem'


function Pantry() {
    const {pantryItems, setPantryItems} = usePantryItems()


    const addIngredient = addIngredientToPantry()
    function handleAddIngredient({
        ingredient,
        amount
    }: {
        ingredient: Ingredient,
        amount: number
    }) {
        addIngredient({
            name: ingredient.name,
            amount,
            unit: ingredient.unit
        })
    }

    const deleteItem = useDeletePantryItem()
    function deleteItemFromPantry(ingredient: Ingredient) {
        const {id} = ingredient || {};
        if (!id) return;
        deleteItem(id)
    }

    return (
        <> 
            <div>
                <header className="flex justify-between w-fit gap-8 items-center px-2">
                    <button className="p-1 bg-gray-100 aspect-square w-8 rounded-full shadow-sm">+</button>
                </header>
                <AddIngredient onAdd={handleAddIngredient} disableItems={pantryItems.map(({ingredient_id}) => ingredient_id)} />
                <IngredientList ingredients={pantryItems} removeItem={deleteItemFromPantry}  />
            </div>
        </>
    )
}

export default Pantry