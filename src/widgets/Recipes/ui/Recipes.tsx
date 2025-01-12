import { useRecipeLib } from "@/shared/recipes/useRecipeLib"
import { RecipeListItem } from "@/entities/Recipe"
import type { Recipe } from "@/entities/Recipe/lib/types";
import Modal from '@/shared/ui/Modal'
import { useState } from "react";
import { RecipeCreator } from "@/widgets/RecipeCreator";
export default function Recipes() {

    const recipes = useRecipeLib();
    const [modalOpen, setModalOpen] = useState(false)

    function closeModal() {
        setModalOpen(false)
    }
    return (
        <div>
            <Modal close={closeModal} isOpen={modalOpen}>
        <RecipeCreator onCreate={closeModal}/>
                </Modal>

            <button onClick={() => setModalOpen(true)}>Add new Recipe</button>
            {
                recipes.map((recipe: Recipe) => {
                    return (
                        <RecipeListItem recipeId={recipe.id} key={recipe.id} />
                    )
                })
            }
        </div>
    )
}   