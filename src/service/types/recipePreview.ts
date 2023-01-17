import {IRecipePreview} from '../../types/recipe';

export interface RecipePreviewResponse {
  offset: number;
  number: number;
  results: IRecipePreview[];
  totalResults: number;
}

export interface TransformedResponse {
  offset: number;
  hasMore: boolean;
  recipes: IRecipePreview[];
}

export interface ISearchRecipeParams {
  offset: number;
  search: string;
}
