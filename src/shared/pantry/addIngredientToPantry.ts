import useIngredients from "@/shared/ingredients/useIngredients"
import type { Ingredient } from "@/entities/Ingredient"
import db from '@/shared/api/client'
import { useQueryClient } from "@tanstack/react-query"

import { addIngredientToDb } from "@/features/AddIngredient/lib/addIngredientToDb"


export const addIngredientToPantry = () => {
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
            const addToDb = addIngredientToDb()
            ingredientId = (await addToDb({
                name,
                unit
            }))
            queryClient.invalidateQueries({ queryKey: ['ingredients'] })
        }

    

        await db.from('pantry').insert({
            ingredient_id: ingredientId,
            amount,
            unit: existingIngredient?.unit || ''
        })
     
        queryClient.invalidateQueries({ queryKey: ['pantry'] })

    }

    return add;
}