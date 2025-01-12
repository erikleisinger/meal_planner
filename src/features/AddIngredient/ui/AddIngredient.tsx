import { SelectIngredient } from "@/shared/ui/SelectIngredient"
import { IngredientUnitInput } from "@/shared/ui/IngredientUnitInput"
import { useState } from "react"
import type { Ingredient } from "@/entities/Ingredient"
import {Button} from '@/shared/ui/Button'


export default function AddIngredient({ disableItems, onAdd }: {
    disableItems: string[], onAdd: ({ ingredient, amount }: {
        ingredient: Ingredient | 'custom',
        amount: number,
    }) => void
}) {
    const [ingredientAmount, setIngredientAmount] = useState(0)
    const [selectedIngredient, setSelectedIngredient] = useState(null)

    function handleSetSelectedIngredient(ingredient: Ingredient | "custom") {
        setSelectedIngredient(ingredient)

    }

    function isButtonDisabled() {
        return !ingredientAmount || !selectedIngredient
    }

    function handleAdd() {
        const { id } = selectedIngredient || {};
        if (!id || !selectedIngredient) {
            onAdd({
                ingredient: {
                    id: null,
                    ...(selectedIngredient || {}),
                },
                amount: ingredientAmount
            })
        } else {
            onAdd({
                ingredient: selectedIngredient,
                amount: ingredientAmount
            })
        }
    }
    function setUnit(e) {
        console.log('set unit: ', e)
        setSelectedIngredient({
            ...selectedIngredient,
            unit: e
        })
    }
    return (
        <div className="p-2 rounded-md border-2 w-fit">
            <header className="mb-2">
                <div className="text-sm ">Add new ingredient</div>

            </header>
            <div className="flex flex-col gap-2">
                <SelectIngredient selectedIngredient={selectedIngredient} setSelectedIngredient={handleSetSelectedIngredient} disableItems={disableItems} />


         

            {
                selectedIngredient && <IngredientUnitInput ingredient={selectedIngredient} amount={ingredientAmount} setAmount={setIngredientAmount} unit={selectedIngredient.unit} setUnit={setUnit} />
            }
            <Button onClick={handleAdd} disabled={isButtonDisabled()}>
            Add
            </Button>
            </div>

        </div>
    )
}