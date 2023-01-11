export interface Metric {
  amount: number;
  unitLong: string;
  unitShort: string;
}

export interface Us {
  amount: number;
  unitLong: string;
  unitShort: string;
}

export interface Measures {
  metric: Metric;
  us: Us;
}

export interface ExtendedIngredient {
  aisle: string;
  amount: number;
  consitency: string;
  id: number;
  image: string;
  measures: Measures;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

export interface IInstruction {
  number: number;
  step: string;
  ingredients: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }[];
}

export interface IRecipeInformation {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: {
    steps: IInstruction[];
  }[];
  cheap: boolean;
  creditsText: string;
  dairyFree: boolean;
  gaps: string;
  instructions: string;
  vegetarian: boolean;
  dishTypes: string[];
  extendedIngredients: ExtendedIngredient[];
  summary: string;
}
