import useIngredients from "@/shared/ingredients/useIngredients"
import type { Ingredient } from '@/entities/Ingredient'
import SelectIngredientName from "./SelectIngredientName";
import { SelectIngredientUnit } from "@/shared/ui/SelectIngredientUnit";
import { useState, useEffect } from 'react'
import { Input } from "@/shared/ui/Input";

export default function SelectIngredient({
    disableItems = [],
    selectedIngredient,
    setSelectedIngredient
}: {
    disableItems: string[];
    selectedIngredient: Ingredient | null,
    setSelectedIngredient: (ingredient: Ingredient | null) => void
}) {

    const ingredients = useIngredients()
    const [selectedIngredientName, setSelectedIngredientName] = useState('')
    const [customIngredientName, setCustomIngredientName] = useState('')
    const [customIngredientUnit, setCustomIngredientUnit] = useState('')

    useEffect(() => {
        if (selectedIngredientName) {
            const ingredient = ingredients.find((ingredient: Ingredient) => ingredient.name === selectedIngredientName)
            setSelectedIngredient(ingredient)
        } else {
            setSelectedIngredient(null)
        }
    }, [selectedIngredientName])

    function updateSelectedIngredient(updates: Partial<Ingredient>) {
        setSelectedIngredient({
            ...selectedIngredient,
            ...updates
        })
    }



    return (
        <>
           
                <SelectIngredientName selectedIngredientName={selectedIngredientName} setSelectedIngredientName={setSelectedIngredientName} disableItems={disableItems} />
                
                {
                    selectedIngredientName === 'Custom' && 
                    
                    <div className="flex gap-2">
                        <Input type="text" value={customIngredientName} setValue={(newName: string) => {
    
                            setCustomIngredientName(newName)
                            updateSelectedIngredient({
                                name: newName
                            })

                        }} placeholder="Ingredient Name" />
        
                    </div>
                }
          
        </>
    )
}