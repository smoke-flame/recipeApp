import React, {FC} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './RadioGroup.style';

interface IProps {
  items: string[];
  value: string | null;
  onChange: (value: string) => void;
  style?: ViewStyle;
}

const RadioGroup: FC<IProps> = ({style, items, value, onChange}) => (
  <View style={[styles.root, style]}>
    {items.map(item => (
      <TouchableOpacity
        key={item}
        style={[styles.item, value === item && styles.activeItem]}
        onPress={() => onChange(item)}>
        <View style={styles.row}>
          <View
            style={[styles.circle, value === item && styles.activeCircle]}
          />
          <Text style={styles.itemText}>{item}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default RadioGroup;
