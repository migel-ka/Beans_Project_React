export type RecipiesType = {
    backgroundColor: string;
    recipeId: number;
    colorGroup: string;
    description: string;
    flavorName: string;
    glutenFree: boolean;
    groupName: string[];
    imageUrl: string;
    ingredients: string[];
    kosher: boolean;
    seasonal: boolean;
    sugarFree: boolean;
    name: string,
    prepTime: string,
    cookTime: string,
    totalTime: string,
    makingAmount: string,
    additions1: [],
    additions2: [],
    additions3: [],
    directions: [string],
    tips: []
}