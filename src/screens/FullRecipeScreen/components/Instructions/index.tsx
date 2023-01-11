import React, {FC} from 'react';

import {Text, View} from 'react-native';
import {styles} from './Instructions.style';
import {IInstruction} from '../../../../service/types/recipeInformation';

interface IProps {
  instructions: IInstruction[];
}

const Instructions: FC<IProps> = ({instructions}) => {
  return (
    <View>
      <Text style={styles.title}>Instructions</Text>
      <View style={styles.list}>
        {instructions.map(instruction => (
          <View key={instruction.number}>
            <Text style={styles.step}>
              {instruction.number}. {instruction.step}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Instructions;
