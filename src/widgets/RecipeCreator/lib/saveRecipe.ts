import { useQueryClient } from "@tanstack/react-query"
import db from '@/shared/api/client'
import { addIngredientToDb } from "@/features/AddIngredient/lib/addIngredientToDb"
export function useSaveRecipe() {
    const queryClient = useQueryClient();
    return async function save({
        name,
        ingredients
    }: {
        name: string,
        ingredients: {
            ingredient_id: string,
            amount: number
        }[]
    }) {
    
        const {data} = await db.from('recipe').insert({
            name
        }).select('id').single()
        const recipeId = data.id

        if (!recipeId) {
            throw new Error('Failed to create recipe')
        }
        const allIngredients = []
        let resetIngredientsQuery = false;
        for (let i = 0; i < ingredients.length; i++) {
            const ingredient = ingredients[i]
            const { id: ingredientId } = ingredient
            if (!ingredientId) {
                const id =  await addIngredientToDb()(ingredient)
                allIngredients.push({
                    ...ingredient,
                    id
                })
                resetIngredientsQuery = true;
             }  else {
                allIngredients.push(ingredient)
             }
      
        }
        if (resetIngredientsQuery) {
            queryClient.invalidateQueries({ queryKey: ['ingredients'] })
        }

        await db.from('ingredient_recipe_junction').insert(allIngredients.map(ingredient => ({
            recipe_id: recipeId,
            ingredient_id: ingredient.id,
            amount: ingredient.amount,
            unit: ingredient.unit
        })))

   


    }
  
}