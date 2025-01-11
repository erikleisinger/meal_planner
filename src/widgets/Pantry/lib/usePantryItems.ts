import { useQuery } from "@tanstack/react-query";
import db from "@/shared/api/client";
import { useState, useEffect } from "react";
export default function usePantryItems() {
    const [pantryItems, setPantryItems] = useState([])

    async function getPantryItems() {
        const {data, error} = await db.from('pantry').select('*')
        if (error) {
            throw new Error(error.message)
        }
        return data;
    }

    const {data, error, isSuccess} = useQuery({
        queryKey: ['pantry'],
        queryFn: getPantryItems,
    })

        useEffect(() => {
            if (!isSuccess) return;
            setPantryItems(data)
        }, [isSuccess, data])

    return {
        pantryItems,
        setPantryItems
    }
}