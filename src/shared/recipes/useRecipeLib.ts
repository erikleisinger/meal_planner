import useIngredients from '@/shared/ingredients/useIngredients'
import { useQuery } from "@tanstack/react-query";
import db from '@/shared/api/client'
import { useState, useEffect } from 'react'
export function useRecipeLib() {
    const ingredients = useIngredients()
    const [recipes, setRecipes] = useState([])
    // return [
    //     {
    //         name: 'Spaghetti Bolognese',
    //         ingredients: [
    //             {
    //                 ingredient_id: 1,
    //                 amount: 2
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Pasta Carbonara',
    //         ingredients: [
    //             {
    //                 ingredient_id: 2,
    //                 amount: 200
    //             },
    //             {
    //                 ingredient_id: 3,
    //                 amount: 2
    //             }
    //         ]

    //     }

    // ].map((recipe, i) => ({
    //     ...recipe,
    //     id: i + 1,
    //     ingredients: recipe.ingredients.map(({ingredient_id, amount}) => ({
    //         name: ingredients.find(({id}) => id === ingredient_id)?.name || 'Unknown ingredient',
    //         amount
    //     }))
    // }))

    async function fetchRecipesFromDb() {
        const { data: dbRecipes, error } = await db.from('recipe').select('*')

        if (error) {
            return []
        }

        const recipeIds = dbRecipes.reduce((all, { id }) => {
            if (all.includes(id)) return all
            return [...all, id]
        }, []);

        const { data: ingredients, error: ingredientsError } = await db.from('ingredient_recipe_junction').select(`
            ingredient:ingredient_id (
               id,
               name,
               unit
            ),
            amount,
            recipe_id
            `).in('recipe_id', recipeIds)

        if (ingredientsError) {
            return []
        }


        return dbRecipes.map((recipe) => ({
            ...recipe,
            ingredients: ingredients.filter(({ recipe_id }) => recipe_id === recipe.id).map(({ ingredient, amount }) => ({
                ...ingredient,
                amount
            }))
        }))
    }

    const { data, isSuccess } = useQuery({
        queryKey: ['recipes'],
        queryFn: fetchRecipesFromDb,
    })

    useEffect(() => {
        if (!isSuccess) return;
        setRecipes(data || [])
    }, [isSuccess, data])

    return recipes;

}