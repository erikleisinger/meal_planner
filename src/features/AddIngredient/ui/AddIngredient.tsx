import { SelectIngredient } from "@/shared/ui/SelectIngredient"
import { IngredientUnitInput } from "@/shared/ui/IngredientUnitInput"
import { useState } from "react"
export default function AddIngredient({disableItems, handleAddIngredient}: {disableItems: string[], handleAddIngredient: (ingredient: any) => void}) {
    const [ingredientAmount, setIngredientAmount] = useState(0)
    const [selectedIngredient, setSelectedIngredient] = useState(null)
    return (
        <div className="p-2 rounded-md border-2 w-fit">
            <header className="mb-2">
                <div className="text-sm ">Add new ingredient</div>
            </header>
            <SelectIngredient selectedIngredient={selectedIngredient} setSelectedIngredient={setSelectedIngredient} disableItems={disableItems}  />
            {
                selectedIngredient &&   <IngredientUnitInput ingredient={selectedIngredient} amount={ingredientAmount} setAmount={setIngredientAmount} />
            }
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md w-full mt-4" onClick={() => handleAddIngredient({
                ingredient: selectedIngredient,
                amount: ingredientAmount
            })}>Add</button>
          
        </div>
    )
}