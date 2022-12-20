export interface Recipe {
    id: string,
    title: string,
    description: string,
    photo: string,
    ingredients: { ingredient: string }[],
    directions: { direction: string }[],
    servings: number,
    prep_time: number,
    cook_time: number,
    prep_time_unit: string,
    cook_time_unit:string,
    author: string | null
}
