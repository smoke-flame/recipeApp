import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {colors} from 'constants/styles';
import {styles} from './RecipeInfo.style';

interface IProps {
  title: string;
  readyInMinutes: number;
  servings: number;
  saved: boolean;
  onToggle: () => void;
}

const RecipeInfo: FC<IProps> = ({
  saved,
  onToggle,
  title,
  servings,
  readyInMinutes,
}) => (
  <View style={styles.labelContainer}>
    <View>
      <Text style={styles.labelText} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.description}>
        {readyInMinutes} mins | {servings} serving
      </Text>
    </View>
    <TouchableOpacity onPress={onToggle}>
      <FontAwesomeIcon
        name={saved ? 'bookmark' : 'bookmark-o'}
        size={27}
        color={colors.inactive}
      />
    </TouchableOpacity>
  </View>
);

export default RecipeInfo;
