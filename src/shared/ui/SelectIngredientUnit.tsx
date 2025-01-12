import { INGREDIENT_UNITS, INGREDIENT_UNITS_READABLE } from "@/shared/ingredients/ingredientUnits";
import {Select} from '@/shared/ui/Select'
export function SelectIngredientUnit({
    selectedUnit,
    setSelectedUnit
}: {
    selectedUnit: string,
    setSelectedUnit: (unit: string) => void
}) {

    function handleChange(unit: string) {
        setSelectedUnit(unit)
    }

    function unitOptions() {
        return [

            ...INGREDIENT_UNITS.map((unit: string) => (
                {
                    value: unit,
                    label: INGREDIENT_UNITS_READABLE[unit]
                }
            ))
        ]
    }
    return (
        <Select placeholder="Unit" value={selectedUnit} onChange={handleChange} options={unitOptions()}/>
     
    )
}