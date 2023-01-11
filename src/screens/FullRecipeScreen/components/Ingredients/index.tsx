import React, {FC, useCallback} from 'react';

import {ImageBackground, Text, View} from 'react-native';
import {styles} from './Ingredients.style';
import {ExtendedIngredient} from '../../../../service/types/recipeInformation';

interface IProps {
  ingredients: ExtendedIngredient[];
}

const baseProductUrl = 'https://spoonacular.com/cdn/ingredients_100x100/';
const Ingredients: FC<IProps> = ({ingredients}) => {
  const hasDuplicate = useCallback(
    (id: number) => {
      return ingredients.filter(ingredient => ingredient.id === id).length > 1;
    },
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
                  source={{uri: baseProductUrl + ingredient.image}}
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
