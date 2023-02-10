import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'constants/styles';
import {Link} from '@react-navigation/native';
import {useRecipe} from 'hooks/useRecipe';
import {Recipe} from 'models';
import RecipePreview from 'components/RecipePreview';
import {IRecipePreview} from 'types/recipe';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {styles} from './FavoriteScreen.style';

const FavoriteScreen = () => {
  const user = useTypedSelector(state => state.userReducer.user);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const {getRecipes} = useRecipe();

  useEffect(() => {
    getRecipes().then(setSavedRecipes);
    // eslint-disable-next-line
  }, [user]);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Saved Recipes</Text>
      {savedRecipes.length ? (
        <View style={styles.list}>
          {savedRecipes.map(item => (
            <View style={styles.recipeItem} key={item.id}>
              <RecipePreview
                key={item.id}
                {...(item as unknown as IRecipePreview)}
                id={item.recipeId}
              />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicon
            style={styles.emptyIcon}
            name="ios-sad-outline"
            size={92}
            color={colors.primary}
          />
          <Text style={[styles.emptyText, styles.firstEmptyText]}>
            You have not saved any recipe yet.
          </Text>
          <Text style={styles.emptyText}>
            Open{' '}
            <Text style={styles.link}>
              <Link to="/Home">Search</Link>
            </Text>{' '}
            page to find new recipes
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default FavoriteScreen;
