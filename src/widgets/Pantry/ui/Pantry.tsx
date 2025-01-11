import { SelectIngredient } from '@/features/SelectIngredient'
import {IngredientList} from '@/features/IngredientList'

const PANTRY_ITEMS = [
    {
        ingredient_id: 1,
        amount: 5
    },
    {
        ingredient_id: 2,
        amount: 500
    }
]

function Pantry() {
  
    return (
      <>
       <div>
        <h2>Pantry</h2>
        <IngredientList ingredients={PANTRY_ITEMS}/>
       </div>
      </>
    )
  }
  
  export default Pantry