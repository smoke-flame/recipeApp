import React, {FC, useCallback} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ExtendedIngredient} from 'service/types/recipeInformation';
// @ts-ignore
import {BASE_PRODUCT_URL} from '@env';
import {styles} from './Ingredients.style';

interface IProps {
  ingredients: ExtendedIngredient[];
}

const Ingredients: FC<IProps> = ({ingredients}) => {
  const hasDuplicate = useCallback(
    (id: number) =>
      ingredients.filter(ingredient => ingredient.id === id).length > 1,
    [ingredients],
  );

  return (
    <View style={styles.root}>
      <View style={styles.ingredientsHeader}>
        <Text style={styles.ingredients}>Ingredients</Text>
        <Text style={styles.ingredientsCount}>{ingredients.length} item</Text>
      </View>
      <View style={styles.ingredientList}>
        {ingredients.map(ingredient => (
          <View key={ingredient.original} style={styles.ingredientRow}>
            <View style={styles.ingredientLeft}>
              <View style={styles.ingredientImageWrapper}>
                <ImageBackground
                  source={{uri: BASE_PRODUCT_URL + ingredient.image}}
                  style={styles.ingredientImage}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.ingredientName} numberOfLines={2}>
                {hasDuplicate(ingredient.id)
                  ? ingredient.original
                  : ingredient.name}
              </Text>
            </View>
            <Text>
              {ingredient.amount} {ingredient.unit || 'piece'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Ingredients;
