import { useQueryClient } from "@tanstack/react-query";
import db from '@/shared/api/client'
export function useDeletePantryItem() {
    const queryClient = useQueryClient()
    return async function deletePantryItem(ingredient_id: string) {
        await db.from('pantry').delete().eq('ingredient_id',ingredient_id)
        queryClient.invalidateQueries({queryKey: ['pantry']})
    }
}   