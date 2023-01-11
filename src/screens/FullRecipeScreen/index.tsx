import React from 'react';

import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './FullRecipeScreen.style';
import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../router/types';
import {useGetRecipeInformationQuery} from '../../service/RecipesService';
import {colors} from '../../constants/styles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {IRecipeInformation} from '../../service/types/recipeInformation';
import RecipeInfo from '../../components/RecipeInfo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';

const FullRecipeScreen = () => {
  const navigation = useTypedNavigation();
  const {
    params: {id},
  } = useRoute<RootRouteProps<'FullRecipe'>>();
  const {data, isLoading} = useGetRecipeInformationQuery(id);

  const {
    readyInMinutes,
    servings,
    title,
    image,
    vegetarian,
    extendedIngredients,
    analyzedInstructions,
  } = data || ({} as IRecipeInformation);
  console.log(JSON.stringify(analyzedInstructions, null, 2));
  console.log(analyzedInstructions?.length);

  if (isLoading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  if (!data) {
    return <></>;
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
          />
        </View>
      </View>
      <Ingredients ingredients={extendedIngredients} />
      <Instructions instructions={analyzedInstructions[0].steps} />
    </ScrollView>
  );
};

export default FullRecipeScreen;
