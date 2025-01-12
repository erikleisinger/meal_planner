import db from '@/shared/api/client'


export const addIngredientToDb = () =>  {

    async function add ({
        name, unit
    }: {
        name: string,
        unit: string
    }) {
     
        const { data } = await db.from('ingredients').insert([
            {
                name,
                unit: unit || null
            }
        ]).select('id').single()  
        
 

        return data.id;
    }
return add;
}