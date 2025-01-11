import type { Ingredient } from "@/entities/Ingredient";
import getIngredientUnit from "@/shared/ingredients/getIngredientUnit";

export function IngredientUnitInput({ingredient, amount, setAmount} : {ingredient: Ingredient, amount: number, setAmount: (amount: number) => void}) {
    return (
        <div className="flex items-center gap-1">
            <input type="number" className="w-16" onChange={(e) => setAmount(Number(e.target.value))} value={amount} />
            <span>{getIngredientUnit(ingredient.unit)}</span>
        </div>
    )
}