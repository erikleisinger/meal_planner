import { useState } from "react"
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { AddIngredient } from "@/features/AddIngredient"
import type { Ingredient } from "@/entities/Ingredient"
import { IngredientList } from "@/features/IngredientList"
import { useSaveRecipe } from "../lib/saveRecipe"
export default function RecipeCreator({
    onCreate
}: {
    onCreate: () => void
}) {
    const [recipeName, setRecipeName] = useState('')
    const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([])
    const [addingNew, setAddingNew] = useState(false)

    function handleAddIngredient(ingredient: Ingredient) {
        setSelectedIngredients(prev => [...prev, ingredient])
        setAddingNew(false)
    }

    function beginAdd() {
        setAddingNew(true)
    }

    function removeItemFromList(ingredient: Ingredient) {
        setSelectedIngredients(prev => prev.filter(({ ingredient: i }) => i.id !== ingredient.id))
    }

    const saveRecipe = useSaveRecipe()

   function handleSave() {
        saveRecipe({
            name: recipeName,
            ingredients: selectedIngredients.map(({ ingredient, amount }) => {
                return {
                    ...ingredient,
                    amount
                }
            })
        })
        onCreate()
    }

    function isValidRecipe() {
        return !!recipeName && !!selectedIngredients?.length
    }

    return (
        <div className="grid grid-rows-[auto_1fr,auto] min-h-[400px] ">
            <header className="sticky top-0 bg-white p-4 z-[1] border-b-2">
                <h2 className="text-lg font-semibold">Recipe Creator</h2>
            </header>
            <div className="relative bg-slate-50 p-4">

                <div className="overflow-auto">

                    <label className="block mb-1 text-sm text-slate-800 " htmlFor="recipe_editor_recipe_name">Recipe name</label>
                    <Input id="recipe_editor_recipe_name" placeholder="Recipe name" type="text" value={recipeName} setValue={setRecipeName} />

                    <label className="block mb-1 text-sm text-slate-800 mt-8 " id="recipe_editor_ingredients_section_label">Ingredients</label>
                    <section htmlaria-labelledby="recipe_editor_ingredients_section_label" className="bg-white rounded-md p-2">
                        {
                            addingNew && <AddIngredient onAdd={handleAddIngredient} disableItems={[]} />
                        }
                        <IngredientList removeItem={removeItemFromList} ingredients={selectedIngredients.map(({ ingredient, amount }) => ({
                            ingredient_id: ingredient.id,
                            ...ingredient,
                            amount
                        }))} />
                        {
                            !addingNew && <button onClick={beginAdd}>Add new</button>
                        }


                    </section>

                </div>
            </div>
            <div className="sticky bottom-0 bg-white p-4 border-t-2 flex justify-center">
                <Button disabled={!isValidRecipe()} onClick={handleSave}>
                    Save
                </Button>
            </div>

        </div>
    )
}