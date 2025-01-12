import useIngredients from "@/shared/ingredients/useIngredients"
import type { Ingredient } from "@/entities/Ingredient"
import db from '@/shared/api/client'
import { useQueryClient } from "@tanstack/react-query"
import { addIngredientToDb } from "./addIngredientToDb"
export function addIngredientToPantry() {
    const ingredients = useIngredients()
    const queryClient = useQueryClient();

    async function add({
        name,
        amount,
        unit
    }: {
        name: string,
        amount: number,
        unit?: string
    }) {
        const existingIngredient = ingredients.find((ingredient: Ingredient) => ingredient.id === name)
        let ingredientId = existingIngredient?.id
        if (!existingIngredient) {
            if (!unit) {
                console.warn('Cannot add custom ingredient: no unit specified')
                return;
            }

            ingredientId = (await addIngredientToDb({
                name,
                unit
            }))
        }

        await db.from('pantry').insert({
            ingredient_id: ingredientId,
            amount
        })


        queryClient.invalidateQueries({ queryKey: ['pantry'] })
        queryClient.invalidateQueries({ queryKey: ['ingredients'] })
    }

    return add;
}