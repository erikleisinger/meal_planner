import type { Recipe } from "../lib/types"
import { useRecipeLib } from "@/shared/recipes/useRecipeLib"
export default function RecipeListItem({recipeId}: {recipeId: string}) {
    const recipes = useRecipeLib()
    return (
        <div className="hover:bg-slate-100 odd:bg-slate-50 p-2 cursor-pointer">
            {recipes.find(({id}) => id === recipeId)?.name}
        </div>
    )
}