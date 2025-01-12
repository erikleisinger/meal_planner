import type { Ingredient } from "@/entities/Ingredient";
import { Input } from "@/shared/ui/Input";
import { SelectIngredientUnit } from "@/shared/ui/SelectIngredientUnit";

export function IngredientUnitInput({ingredient, amount, setAmount, unit, setUnit} : {ingredient: Ingredient, amount: number, setAmount: (amount: number) => void}) {
    return (
        <div className="flex items-center gap-1">
            <Input type="number" className="w-16" setValue={setAmount} value={amount} />
            <SelectIngredientUnit selectedUnit={unit} setSelectedUnit={setUnit} />

        </div>
    )
}