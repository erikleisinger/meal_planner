export default function getIngredientUnit(unit: string) {
    return {
        self: '',
        clove: 'cloves',
        cube: 'cubes',
        ml: 'ml',
        g: 'g',
        kg: 'kg',
        l: 'l',
    }[unit] || ''
}