import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerIngredientJSON = {
  readonly id?: number | null;
  readonly amount?: number | null;
  readonly original?: string | null;
  readonly image?: string | null;
  readonly unit?: number | null;
}

type LazyIngredientJSON = {
  readonly id?: number | null;
  readonly amount?: number | null;
  readonly original?: string | null;
  readonly image?: string | null;
  readonly unit?: number | null;
}

export declare type IngredientJSON = LazyLoading extends LazyLoadingDisabled ? EagerIngredientJSON : LazyIngredientJSON

export declare const IngredientJSON: (new (init: ModelInit<IngredientJSON>) => IngredientJSON)

type EagerInstructionJSON = {
  readonly id?: number | null;
  readonly number?: number | null;
  readonly step?: string | null;
}

type LazyInstructionJSON = {
  readonly id?: number | null;
  readonly number?: number | null;
  readonly step?: string | null;
}

export declare type InstructionJSON = LazyLoading extends LazyLoadingDisabled ? EagerInstructionJSON : LazyInstructionJSON

export declare const InstructionJSON: (new (init: ModelInit<InstructionJSON>) => InstructionJSON)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly likedRecipes?: number[] | null;
  readonly image?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly likedRecipes?: number[] | null;
  readonly image?: string | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: string | null;
  readonly servings: number;
  readonly readyInMinutes: number;
  readonly instructions: InstructionJSON[];
  readonly ingredients: IngredientJSON[];
  readonly recipeId: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: string | null;
  readonly servings: number;
  readonly readyInMinutes: number;
  readonly instructions: InstructionJSON[];
  readonly ingredients: IngredientJSON[];
  readonly recipeId: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}