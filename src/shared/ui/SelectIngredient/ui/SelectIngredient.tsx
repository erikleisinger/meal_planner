import useIngredients from "@/shared/ingredients/useIngredients"
import type {Ingredient} from '@/entities/Ingredient'

export default function SelectIngredient({
    disableItems,
    selectedIngredient,
    setSelectedIngredient
}: {
    disableItems: string[];
    selectedIngredient: Ingredient | null,
    setSelectedIngredient: (ingredient: Ingredient | null) => void
}) {
    const ingredients = useIngredients()

    function IngredientOption({ingredient, disabled}: {ingredient: Ingredient, disabled: boolean}) {
        return (
            <option disabled={disabled}  value={ingredient.name}>{ingredient.name}</option>
        )
    }

    function IngredientOptions({ingredients}: {ingredients: Ingredient[]}) {
        return (
            ingredients.map((ingredient, i) => (
                <IngredientOption ingredient={ingredient} key={i} disabled={disableItems.includes(ingredient.id)} />
            ))
        )
    }
    return (
        <>
        <select name="ingredient" id="ingredient-select" value={selectedIngredient?.name} onChange={(e) => {
            const ingredient = ingredients.find(ingredient => ingredient.name === e.target.value)
            setSelectedIngredient(ingredient)
        }}>
        <option value="">Select an ingredient</option>
        {IngredientOptions({ingredients})}
        </select>
        </>
    )
}