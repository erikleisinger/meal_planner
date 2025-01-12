import { useQueryClient } from "@tanstack/react-query";
import db from "@/shared/api/client";
export function useDeleteRecipe() {
    const queryClient = useQueryClient();
    return async (recipeId: number) => {
        await db.from('recipe').delete().eq('id', recipeId)
        queryClient.invalidateQueries({ queryKey: ['recipes'] })
    }
}