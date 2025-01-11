import { AddIngredient } from '@/features/AddIngredient'
import { IngredientList } from '@/features/IngredientList'
import { useState, useEffect } from 'react'
import type { Ingredient } from '@/entities/Ingredient'
import usePantryItems from '../lib/usePantryItems'


function Pantry() {
    const {pantryItems, setPantryItems} = usePantryItems()

    function addPantryItem(data: {
        ingredient: Ingredient,
        amount: number
    }) {
        const {amount, ingredient} = data || {}
        const {id} = ingredient || {};
        if (!id) return;
        setPantryItems([...pantryItems, {
            ingredient_id: id,
            amount
        }])
    }
    return (
        <>
            <div>
                <header className="flex justify-between w-fit gap-8 items-center px-2">
                    <button className="p-1 bg-gray-100 aspect-square w-8 rounded-full shadow-sm">+</button>
                </header>
                <AddIngredient handleAddIngredient={addPantryItem} disableItems={pantryItems.map(({ingredient_id}) => ingredient_id)} />
                <IngredientList ingredients={pantryItems}  />
            </div>
        </>
    )
}

export default Pantry