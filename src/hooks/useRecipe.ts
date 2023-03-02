import {DataStore} from '@aws-amplify/datastore';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {Recipe, User} from 'models';
import {Auth} from 'aws-amplify';
import {AuthUser} from 'types/user';
import {useTypedDispatch} from 'hooks/useTypedDispatch';
import {setUser} from 'store/user/userSlice';

export const useRecipe = (): returnType => {
  const user = useTypedSelector(state => state.userReducer.user);
  const dispatch = useTypedDispatch();
  const saveRecipe = async (recipe: Recipe) => {
    await DataStore.save(new Recipe(recipe));
    await DataStore.save(
      User.copyOf(user!, newUser => {
        if (!newUser.likedRecipes) {
          newUser.likedRecipes = [recipe.recipeId];
          return;
        }
        newUser.likedRecipes.unshift(recipe.recipeId);
      }),
    );
    const authenticatedUser: AuthUser = await Auth.currentAuthenticatedUser();
    const [newUser] = await DataStore.query(User, usr =>
      usr.userId.eq(authenticatedUser.attributes.sub),
    );
    dispatch(setUser(newUser));
  };
  const removeRecipe = async (id: number) => {
    await DataStore.save(
      User.copyOf(user!, newUser => {
        newUser.likedRecipes = (newUser.likedRecipes as number[]).filter(
          savedId => savedId !== id,
        );
      }),
    );
    const authenticatedUser: AuthUser = await Auth.currentAuthenticatedUser();
    const [newUser] = await DataStore.query(User, usr =>
      usr.userId.eq(authenticatedUser.attributes.sub),
    );
    dispatch(setUser(newUser));
  };

  const getRecipes = async () => {
    if (!user) return [];
    const userRecipes = [...new Set(user.likedRecipes || [])].map(
      async recipeId => {
        const [recipe] = await DataStore.query(Recipe, usr =>
          usr.recipeId.eq(recipeId),
        );
        return recipe;
      },
    );
    return Promise.all(userRecipes);
  };

  return {saveRecipe, removeRecipe, getRecipes};
};

type returnType = {
  saveRecipe: (recipe: Recipe) => Promise<void>;
  removeRecipe: (id: number) => Promise<void>;
  getRecipes: () => Promise<Recipe[]>;
};
