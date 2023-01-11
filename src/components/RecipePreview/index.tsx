import React, {FC, useCallback, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {IRecipePreview} from '../../models/recipe';
import {styles} from './Recipe.style';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/styles';
import RecipeInfo from '../RecipeInfo';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';

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
  const handlePreviewPress = useCallback(() => {
    navigation.navigate('FullRecipe', {id});
  }, [navigation, id]);

  const fullPrice = useMemo<string>(
    () => ((pricePerServing * servings) / 100).toFixed(2),
    [pricePerServing, servings],
  );
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
          />
        </View>
      </View>
    </Pressable>
  );
};

export default RecipePreview;
