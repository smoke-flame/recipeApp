import React, {FC, useCallback, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {IRecipePreview} from 'types/recipe';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from 'constants/styles';
import {useTypedNavigation} from 'hooks/useTypedNavigation';
import RecipeInfo from 'components/RecipeInfo';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {Recipe} from 'models';
import {useRecipe} from 'hooks/useRecipe';
import {styles} from './Recipe.style';

const RecipePreview: FC<IRecipePreview> = ({
  image,
  title,
  readyInMinutes,
  servings,
  vegetarian,
  pricePerServing,
  id,
}) => {
  const navigation = useTypedNavigation();
  const user = useTypedSelector(state => state.userReducer.user);
  const {saveRecipe, removeRecipe} = useRecipe();

  const handlePreviewPress = useCallback(() => {
    navigation.navigate('FullRecipe', {id});
  }, [navigation, id]);

  const fullPrice = useMemo<string>(
    () => ((pricePerServing * servings) / 100).toFixed(2),
    [pricePerServing, servings],
  );

  const isSaved = useMemo(
    () => user?.likedRecipes?.includes(id) || false,
    [id, user?.likedRecipes],
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
        pricePerServing,
        recipeId: id,
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

  return (
    <Pressable onPress={handlePreviewPress}>
      <View style={styles.root}>
        <ImageBackground source={{uri: image}} style={styles.image} />
        <View style={styles.topContainer}>
          <View style={styles.topWrapper}>
            {vegetarian ? (
              <View style={styles.healthy}>
                <Text>
                  <MaterialCommunityIcon
                    name="sprout"
                    size={24}
                    color={colors.primary}
                  />
                </Text>
              </View>
            ) : (
              <View />
            )}
            <View style={styles.price}>
              <Text>${fullPrice}</Text>
            </View>
          </View>
        </View>

        <View style={styles.label}>
          <RecipeInfo
            title={title}
            servings={servings}
            readyInMinutes={readyInMinutes}
            saved={isSaved}
            onToggle={handleToggle}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default RecipePreview;
