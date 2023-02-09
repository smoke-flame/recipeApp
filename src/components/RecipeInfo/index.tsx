import React, {FC} from 'react';
import {Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {colors} from 'constants/styles';
import {styles} from './RecipeInfo.style';

interface IProps {
  title: string;
  readyInMinutes: number;
  servings: number;
}

const RecipeInfo: FC<IProps> = ({title, servings, readyInMinutes}) => (
  <View style={styles.labelContainer}>
    <View>
      <Text style={styles.labelText} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.description}>
        {readyInMinutes} mins | {servings} serving
      </Text>
    </View>
    <FontAwesomeIcon name="bookmark" size={27} color={colors.inactive} />
  </View>
);

export default RecipeInfo;
