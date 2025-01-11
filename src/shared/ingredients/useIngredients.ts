
import { useQuery } from "@tanstack/react-query";
import db from '@/shared/api/client'
import {useState, useEffect} from 'react'

export default function useIngredients() {

    const [ingredients, setIngredients] = useState([])


    async function getIngredients() {
        const {data, error} = await db.from('ingredients').select('*')
        if (error) {
            return []
        }
        return data
    }

    const {data, isSuccess} = useQuery({
        queryKey: ['ingredients'],
        queryFn: getIngredients,
    })


    useEffect(() => {
        if (!isSuccess) return;
        setIngredients(data)
    }, [isSuccess, data])
    
 
    return ingredients;
}