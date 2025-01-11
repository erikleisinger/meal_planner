import { useState } from "react"

export default function useIngredients() {
    const INGREDIENTS = [
        {
            name: 'Apple',
            unit: 'self'
        },
        {
            name: 'Rice',
            unit: 'g'
        },
        {
            name: 'Garlic',
            unit: 'clove'
        },
        {
            name: 'Bouillon',
            unit: 'cube'
        },
        {
            name: 'Olive Oil',
            unit: 'ml'
        }
    ].map((i, index) => ({
        ...i,
        id: index + 1
    }))
    const [ingredients, setIngredients] = useState(INGREDIENTS)
    
 
    return ingredients;
}