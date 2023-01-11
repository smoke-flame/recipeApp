export interface IRecipePreview {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  pricePerServing: number;
}
