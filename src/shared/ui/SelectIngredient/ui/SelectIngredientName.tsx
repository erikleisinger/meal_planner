import useIngredients from "@/shared/ingredients/useIngredients"
import type { Ingredient } from '@/entities/Ingredient'
import { Select } from "@/shared/ui/Select";
export default function SelectIngredientName({
    disableItems = [],
    selectedIngredientName,
    setSelectedIngredientName
}: {
    disableItems: string[];
    selectedIngredientName: string,
    setSelectedIngredientName: (name: string) => void
}) {
    const ingredients = useIngredients()

    function handleSelectIngredient(ingredientName: string) {
        if (ingredientName === 'Custom') {
            setSelectedIngredientName('Custom')
        } else {
            const ingredient = ingredients.find((ingredient: Ingredient) => ingredient.name === ingredientName)?.name || ''
            setSelectedIngredientName(ingredient)
        }
    }

    function ingredientOptions() {
        return [
            {
                value: 'Custom',
                label: 'Custom'
            },
            ...ingredients.map((ingredient: Ingredient) => ({
                value: ingredient.name,
                label: ingredient.name,
                disabled: disableItems.includes(ingredient.name)
            })).sort((a, b) => a.label.localeCompare(b.label))
        ]
    }

    return (
        <Select placeholder="Select ingredient" name="ingredient" id="ingredient-select" value={selectedIngredientName} onChange={handleSelectIngredient}
            options={ingredientOptions()}
        >
        </Select>

    )
}