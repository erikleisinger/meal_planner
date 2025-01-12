
import { INGREDIENT_UNITS_READABLE } from "./ingredientUnits"
export default function getIngredientUnit(unit: string) {
    return INGREDIENT_UNITS_READABLE[unit] || 'units'
}