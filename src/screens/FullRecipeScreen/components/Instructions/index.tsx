import React, {FC} from 'react';

import {Text, View} from 'react-native';
import {IInstruction} from 'service/types/recipeInformation';
import {styles} from './Instructions.style';

interface IProps {
  instructions: IInstruction[];
}

const Instructions: FC<IProps> = ({instructions}) => (
  <View style={styles.root}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Instructions</Text>
      <Text style={styles.headerText}>{instructions.length} steps</Text>
    </View>
    <View style={styles.list}>
      {instructions.map(instruction => (
        <View key={instruction.number}>
          <View style={styles.step}>
            <Text style={styles.stepTitle}>Step {instruction.number}</Text>
            <Text style={styles.stepText}>{instruction.step}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default Instructions;
