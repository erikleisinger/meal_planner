import { useRecipeLib } from "@/shared/recipes/useRecipeLib"
import { RecipeListItem } from "@/entities/Recipe"
import type { Recipe } from "@/entities/Recipe/lib/types";
export default function Recipes() {
    const recipes = useRecipeLib();
    return (
        <div>
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