import useIngredients from '@/shared/ingredients/useIngredients'
export function useRecipeLib() {
    const ingredients = useIngredients()
    return [
        {
            name: 'Spaghetti Bolognese',
            ingredients: [
                {
                    ingredient_id: 1,
                    amount: 2
                }
            ]
        },
        {
            name: 'Pasta Carbonara',
            ingredients: [
                {
                    ingredient_id: 2,
                    amount: 200
                },
                {
                    ingredient_id: 3,
                    amount: 2
                }
            ]
            
        }

    ].map((recipe, i) => ({
        ...recipe,
        id: i + 1,
        ingredients: recipe.ingredients.map(({ingredient_id, amount}) => ({
            name: ingredients.find(({id}) => id === ingredient_id)?.name || 'Unknown ingredient',
            amount
        }))
    }))
}