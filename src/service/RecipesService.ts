import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {
  ISearchRecipeParams,
  RecipePreviewResponse,
  TransformedResponse,
} from './types/recipePreview';
// @ts-ignore
import {COOK_API_HOST, COOK_API_KEY} from '@env';
import {IRecipeInformation} from './types/recipeInformation';

const perPage = 30;
const defaultHeaders = {
  'X-RapidAPI-Key': COOK_API_KEY,
  'X-RapidAPI-Host': COOK_API_HOST,
};

export const recipesAPI = createApi({
  reducerPath: 'recipesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/',
  }),
  endpoints: build => ({
    getRecipes: build.query<TransformedResponse, ISearchRecipeParams>({
      query: ({search, offset}) => ({
        url: 'recipes/complexSearch',
        params: {
          offset,
          number: perPage,
          query: search,
          addRecipeInformation: true,
          instructionsRequired: true,
        },
        headers: defaultHeaders,
      }),
      transformResponse: ({
        offset,
        results,
        number,
      }: RecipePreviewResponse): TransformedResponse => {
        return {
          offset: offset + number,
          hasMore: number === perPage,
          recipes: offset === 0 ? results : results,
        };
      },
      serializeQueryArgs: ({queryArgs: {search}}) => search,
      merge: (currentCache, newCache) => {
        currentCache.recipes.push(...newCache.recipes);
      },
      forceRefetch: ({currentArg, previousArg}) =>
        currentArg?.search !== previousArg?.search,
    }),
    getRecipeInformation: build.query<IRecipeInformation, number>({
      query: (id: number) => ({
        url: `recipes/${id}/information`,
        params: {
          includeNutrition: false,
        },
        headers: defaultHeaders,
      }),
    }),
  }),
});

export const {useLazyGetRecipesQuery, useGetRecipeInformationQuery} =
  recipesAPI;
