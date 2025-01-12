import type { Ingredient } from "../lib"
export default function Ingredient({
    ingredient,
    amount
}: {
    ingredient: Ingredient,
    amount: number
}) {
    return (
        <div>
            {ingredient.name}
        </div>
    )
}