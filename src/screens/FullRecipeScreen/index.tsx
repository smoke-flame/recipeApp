import React, {useCallback, useMemo} from 'react';

import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from 'router/types';
import {useGetRecipeInformationQuery} from 'service/RecipesService';
import {colors} from 'constants/styles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {IRecipeInformation} from 'service/types/recipeInformation';
import RecipeInfo from 'components/RecipeInfo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTypedNavigation} from 'hooks/useTypedNavigation';
import Ingredients from 'screens/FullRecipeScreen/components/Ingredients';
import Instructions from 'screens/FullRecipeScreen/components/Instructions';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {useRecipe} from 'hooks/useRecipe';
import {Recipe} from 'models';
import {styles} from './FullRecipeScreen.style';

const FullRecipeScreen = () => {
  const navigation = useTypedNavigation();
  const {saveRecipe, removeRecipe} = useRecipe();

  const {
    params: {id},
  } = useRoute<RootRouteProps<'FullRecipe'>>();
  const {data, isLoading} = useGetRecipeInformationQuery(id);
  const user = useTypedSelector(state => state.userReducer.user);

  const {
    readyInMinutes,
    servings,
    title,
    image,
    vegetarian,
    extendedIngredients,
    analyzedInstructions,
    pricePerServing,
  } = data || ({} as IRecipeInformation);

  const isSaved = useMemo(
    () => user!.likedRecipes?.includes(id) || false,
    [id, user],
  );

  const handleToggle = useCallback(async () => {
    if (isSaved) {
      await removeRecipe(id);
    } else {
      await saveRecipe({
        title,
        image,
        servings,
        readyInMinutes,
        recipeId: id,
        pricePerServing,
      } as Recipe);
    }
  }, [
    pricePerServing,
    isSaved,
    removeRecipe,
    id,
    saveRecipe,
    title,
    image,
    servings,
    readyInMinutes,
  ]);

  if (isLoading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  if (!data) {
    return null;
  }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <View style={styles.topIcons}>
          <Pressable onPress={navigation.goBack} style={styles.back}>
            <IoniconsIcon name="chevron-back" size={22} color={colors.white} />
          </Pressable>

          {vegetarian && (
            <View style={styles.healthy}>
              <Text>
                <MaterialCommunityIcon
                  name="sprout"
                  size={24}
                  color={colors.primary}
                />
              </Text>
            </View>
          )}
        </View>
        <ImageBackground source={{uri: image}} style={styles.recipeImg} />
        <View style={styles.titleContainer}>
          <RecipeInfo
            title={title}
            servings={servings}
            readyInMinutes={readyInMinutes}
            saved={isSaved}
            onToggle={handleToggle}
          />
        </View>
      </View>
      <Ingredients ingredients={extendedIngredients} />
      <Instructions instructions={analyzedInstructions[0].steps} />
    </ScrollView>
  );
};

export default FullRecipeScreen;
