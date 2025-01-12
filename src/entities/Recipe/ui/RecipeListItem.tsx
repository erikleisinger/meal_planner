import { useRecipeLib } from "@/shared/recipes/useRecipeLib"
import { useDeleteRecipe } from "../lib/deleteRecipe"
export default function RecipeListItem({recipeId}: {recipeId: string}) {
    const recipes = useRecipeLib()
    const deleteRecipe = useDeleteRecipe()

    return (
        <div className="hover:bg-slate-100 even:bg-slate-50 p-2 cursor-pointer">
            <div className="flex justify-between items-center">
                <div>    {recipes.find(({id}) => id === recipeId)?.name}</div>
                <button className="text-sm text-red-500 hover:bg-red-50 px-2 rounded-md" onClick={() => deleteRecipe(recipeId)}>Delete</button>
        
            </div>
           
        </div>
    )
}